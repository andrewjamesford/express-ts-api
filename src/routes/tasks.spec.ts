import request from "supertest";
import express from "express";
import tasks from "./tasks";

const app = express();
app.use(express.json());
app.use("/tasks", tasks);

describe("Tasks Router", () => {
    it("should create a new task", async () => {
        const res = await request(app)
            .post("/tasks")
            .send({ title: "New Task", description: "Do something" });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body.title).toEqual("New Task");
        expect(res.body.description).toEqual("Do something");
    });

    it("should get a task by id", async () => {
        const task = { title: "New Task", description: "Do something" };
        const createRes = await request(app).post("/tasks").send(task);
        const getRes = await request(app).get(`/tasks/${createRes.body.id}`);
        expect(getRes.statusCode).toEqual(200);
        expect(getRes.body).toEqual(createRes.body);
    });

    it("should get all tasks", async () => {
        const res = await request(app).get("/tasks");
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("should update a task by id", async () => {
        const task = { title: "New Task", description: "Do something" };
        const createRes = await request(app).post("/tasks").send(task);
        const updateRes = await request(app)
            .put(`/tasks/${createRes.body.id}`)
            .send({ title: "Updated Task" });
        expect(updateRes.statusCode).toEqual(200);
        expect(updateRes.body.title).toEqual("Updated Task");
    });

    it("should delete a task by id", async () => {
        const task = { title: "New Task", description: "Do something" };
        const createRes = await request(app).post("/tasks").send(task);
        const deleteRes = await request(app).delete(`/tasks/${createRes.body.id}`);
        expect(deleteRes.statusCode).toEqual(204);
    });
});

