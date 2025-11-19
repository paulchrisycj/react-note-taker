const NoteCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Note Title</h3>

                <p className="badge bg-dark rounded-pill">Category</p>

                <p className="text-gray fs-6">Jul 24 2025</p>

                <div className="d-flex gap-2">
                    <button className="btn btn-link text-primary p-0 text-decoration-none">
                        <i className="bi bi-pencil"></i>
                        Edit
                    </button>
                    <button className="btn btn-link text-danger p-0 text-decoration-none">
                        <i className="bi bi-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoteCard;
