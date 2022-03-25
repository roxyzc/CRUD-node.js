import Api from "../models/models.js";

export const getApi =  async (req, res) => {
    try{
        const apis = await Api.find();
        res.json(apis)
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getApiById =  async (req, res) => {
    const cekId = await Api.findById(req.params.id);
    (!cekId)? res.status(404).json({message: "Data tidak ditemukan"}) : res.json(cekId);
}

export const saveApi =  async (req, res) => {
    const api = new Api(req.body);
    try{
        const saveApi = await api.save();
        res.status(201).json(saveApi);
    } catch(error){
        res.status(400).json({message: error.message});
    }
}

export const updateApi =  async (req, res) => {
    const cekId = await Api.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"})
    try{
        const update = await Api.updateOne({_id:req.params.id}, {$set:req.body});
        res.status(201).json(update);
    } catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteApi =  async (req, res) => {
    const cekId = await Api.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"})
    try{
        const deleteapi = await Api.deleteOne({_id:req.params.id});
        res.status(201).json(deleteapi);
    } catch(error){
        res.status(400).json({message: error.message});
    }
}
