//@description
//@route
//@access
const asyncHandler= require("express-async-handler")
const Contact=require("../models/contactmodel")

const getContacts= asyncHandler(async (req, res)=>{
  const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
  });

  const getContact= asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  });

  const createContact= asyncHandler(async (req, res)=>{
    console.log("Requested body is: ",req.body);
    const{name,phone,email }=req.body;
    if(!email || !phone || !name){
      res.status(400);
      throw new Error("All fields are mandatory !")
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
      user_id: req.user.id,
    })
    res.status(201).json(contact);
  });
  
  const updateContact= asyncHandler(async (req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact didn't upadated");
    }
    if (contact.user_id.toString()!==req.user.id){
      res.status(403);
      throw new Error("You are not Authorized to make changes")
    }
    const updateContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
    );
    res.status(200).json(updateContact);
  });
  
  const deleteContact= asyncHandler(async (req, res)=>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
      res.status(404);
      throw new Error("Contact Not found");
    }
    if (contact.user_id.toString()!==req.user.id){
      res.status(403);
      throw new Error("You are not Authorized to make changes")
    }
    await Contact.deleteOne({_id: req.params.id});
    contact =
    res.status(200).json(contact);
  });

  module.exports={getContact, getContacts, createContact, updateContact, deleteContact};