import request from "supertest";

import app from '../app';

describe("Tasks Router", () => {
    // it("should create a new task", async () => {
    //     const res = await request(app)
    //         .post("/api/v1/tasks")
    //         .send({ message: "Task is created" });
    //     expect(res.statusCode).toEqual(201);
    //     // expect(res.body).toHaveProperty("id");
    //     // expect(res.body.title).toEqual("New Task");
    //     // expect(res.body.description).toEqual("Do something");
    // });

    // it("should get a task by id", async () => {
    //     const task = { title: "New Task", description: "Do something" };
    //     const createRes = await request(app).post("/tasks").send(task);
    //     const getRes = await request(app).get(`/tasks/${createRes.body.id}`);
    //     expect(getRes.statusCode).toEqual(200);
    //     expect(getRes.body).toEqual(createRes.body);
    // });

    it('should get hello world', (done) => {
        const expected = { message: 'Hello World' };
        request(app)
          .get('/')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, expected, done);
      });

    it("should get all tasks", (done) => {
        const expected = [{
            id: 1,
            name: "John Doe",
          }, {
            id: 2,
            name: "Sam Smith",
          }];
        request(app)
          .get('/api/v1/tasks/')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, expected, done);
    });

    // it("should update a task by id", async () => {
    //     const task = { title: "New Task", description: "Do something" };
    //     const createRes = await request(app).post("/tasks").send(task);
    //     const updateRes = await request(app)
    //         .put(`/tasks/${createRes.body.id}`)
    //         .send({ title: "Updated Task" });
    //     expect(updateRes.statusCode).toEqual(200);
    //     expect(updateRes.body.title).toEqual("Updated Task");
    // });

    // it("should delete a task by id", async () => {
    //     const task = { title: "New Task", description: "Do something" };
    //     const createRes = await request(app).post("/tasks").send(task);
    //     const deleteRes = await request(app).delete(`/tasks/${createRes.body.id}`);
    //     expect(deleteRes.statusCode).toEqual(204);
    // });
});

