import NoteCard from "./NoteCard";
import { useState, useEffect } from "react";

function Home() {
    const [notes, setNotes] = useState([
        {
            title: "Which theme should we pick?",
            category: "Ideas",
            content: "",
            date: "Jul 20, 2025 6:58 PM"
        },
        {
            title: "Project Making Week",
            category: "Personal",
            content: "",
            date: "Jul 20, 2025 6:58 PM"
        },
        {
            title: "Assignment Sheets",
            category: "Work",
            content: "",
            date: "Jul 20, 2025 6:58 PM"
        },
    ])

    // localStorage.clear()

    const [categories, setCategories] = useState(['Ideas', 'Personal', 'Work'])
    
    const [sortingOption, setSortingOption] = useState(['Last Updated', 'Title'])


    if(localStorage.getItem('notes') === null){
        localStorage.setItem('notes', JSON.stringify(notes))
    }
    if(localStorage.getItem('categories') === null){
        localStorage.setItem('categories', JSON.stringify(categories))
    }

    // Get notes from localStorage.
    useEffect(() => {
        setNotes(localStorage.getItem('notes'))
    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <h1>All Notes</h1>
                </div>
                <div className="col-md-4">
                    <div className="d-flex gap-2">
                        <select className="form-select">
                            <option value="">All Categories</option>
                        </select>
                        <select className="form-select">
                            <option value="">Sort By</option>
                            <option value="date">Date</option>
                            <option value="title">Title</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <NoteCard/>
                </div>
            </div>
        </div>
    );
}

export default Home;