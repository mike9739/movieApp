import {useState} from 'react';
const MovieCreateForm=() => {
    const [form , setForm] = useState({
        name:'',
        description:'',

    })
    const handleChange = (event) => {
        const target = event.target
        const name =target.name;
        setForm({
            ...form,
            [name]: target.value
        })
    }
    return(
    <>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       onChange={handleChange}
                       value={form.name}
                       name="name"
                       className="form-control"
                       id="name"
                       aria-describedby="emailHelp"
                       placeholder="Movie Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text"
                       onChange={handleChange}
                       name="description"
                       value={form.description}
                       className="form-control"
                       id="description"
                       placeholder="Description"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Rating</label>
                <input
                    onChange={handleChange}
                    value={form.rating}
                    name="rating"
                    type="number"
                    max="5"
                    min="0"
                    className="form-control"
                    id="rating"
                    placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="text"
                       onChange={handleChange}
                       name="image"
                       value={form.image}
                       className="form-control"
                       id="image"
                       placeholder="http://....."/>
            </div>
            <div className="form-group">
                <label htmlFor="cover">Cover</label>
                <input type="text"
                       onChange={handleChange}
                       value={form.cover}
                       name="cover"
                       className="form-control"
                       id="cover"
                       placeholder="http://......"/>
            </div>
            <div className="form-group">
                <label htmlFor="longDesc">Long Description</label>
                <textarea className="form-control"
                          onChange={handleChange}
                          name="longDescription"
                          value={form.longDescription}
                            id="longDescription"
                           rows="3"/>
            </div>
            <div className="form-group">
                <label htmlFor="genre">Genre</label>
                <select value={form.genre} multiple className="form-control" id="genre">
                    <option>drama</option>
                    <option>music</option>
                    <option>adventure</option>
                    <option>historical</option>
                    <option>action</option>
                </select>
            </div>
        </form>
    </>
)
}
export default MovieCreateForm;