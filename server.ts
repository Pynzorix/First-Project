import app from "./src/app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("SIGINT", () => {
    console.log("Server shutting down...");
    server.close(() => {
        console.log("Server gracefully stopped");
        process.exit(0);
    });
})