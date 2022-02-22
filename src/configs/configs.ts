import express from "express";

export const configs = {
    app: express(),
    port: 8080 as number,
    host: 'localhost' as string,
    dbUrl: "mongodb://localhost:27017/books",
}
