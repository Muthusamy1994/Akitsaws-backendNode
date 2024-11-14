import { modelList } from "../../config/modelList.js";

export const create = async (req, res) => {

    try {

        let userData = req.body

        const usermaster = await modelList.register.create(userData);
        
        res.status(201).json({
            status: 201,
            message: 'User registered successfully',
            data: usermaster,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding user" });
    }

};