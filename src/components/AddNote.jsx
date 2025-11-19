import React, { useState, useEffect } from "react";

const AddNote = ({}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const [categoryChoices, setCategoryChoices] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("categories") !== null) {
            setCategoryChoices(JSON.parse(localStorage.getItem("categories")));
        }
        if (localStorage.getItem("notes") !== null) {
            existingNotes = JSON.parse(localStorage.getItem('notes'))
        }
    }, []);

    const categories = JSON.parse(localStorage.getItem("categories"));
    let existingNotes = [];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Add New Note</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="noteTitle" className="form-label">
                                        Note Title
                                    </label>
                                    <input type="text" className="form-control" id="noteTitle" placeholder="Enter note title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noteCategory" className="form-label">
                                        Category
                                    </label>
                                    <select className="form-control" id="noteCategory" value={category} onChange={(e) => setCategory(e.target.value)}>
                                        <option value="">Select a category</option>
                                        {categoryChoices.map((cat, index) => (
                                            <option key={index} value={cat}>
                                                {cat}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noteContent" className="form-label">
                                        Note Content
                                    </label>
                                    <textarea className="form-control" id="noteContent" placeholder="Enter note content" value={content} onChange={(e) => setContent(e.target.value)} rows="10" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Add Note
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNote;
