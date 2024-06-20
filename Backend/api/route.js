import express from 'express';
import svaDAO from '../dao/svaDAO.js';

const router = express.Router();

const createRouter = (upload) => {
    router.route('/jobApplication').get(async (req, res) => {
        try {
            let list = await svaDAO.getJobDAO();
            if (!list) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
            res.json(list);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    }).post(upload.single('resume'), async (req, res) => {
        try {
            const { firstname, lastname, email, mobileno, appliedPosition } = req.body;
            const resume = req.file ? req.file.path : null;

            let todoresponse = await svaDAO.addJobDAO(
                firstname,
                lastname,
                email,
                mobileno,
                resume,
                appliedPosition
            );
            res.json({ todoresponse });
        } catch (e) {
            res.status(500).send("failed post");
        }
    });

    router.route('/jobApplication/:id').put(upload.single('resume'), async (req, res) => {
        try {
            const { id, firstname, lastname, email, mobileno, appliedPosition } = req.body;
            const resume = req.file ? req.file.path : null;

            const todoResponse = await svaDAO.updateJobDAO(
                id,
                firstname,
                lastname,
                email,
                mobileno,
                resume,
                appliedPosition
            );

            if (todoResponse.error) {
                res.status(400).json({ error: todoResponse.error });
            } else if (todoResponse.modifiedCount === 0) {
                throw new Error("unable to update ToDo List");
            } else {
                res.json({ status: "success" });
            }
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }).delete(async (req, res) => {
        try {
            const {id} = req.params;
            
            const todoResponse = await svaDAO.deleteJobDAO(id);
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }).get(async (req, res) => {
        try {
            const id = req.body.id;
            let list = await svaDAO.getIdJobDAO(id);
            if (!list) {
                res.status(404).json({ error: "Not Found" });
                return;
            }
            res.json(list);
        } catch (e) {
            res.status(500).json({ error: e });
        }
    });

    return router;
};

export default createRouter;


