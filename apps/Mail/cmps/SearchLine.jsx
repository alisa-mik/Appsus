export class SearchLine extends React.Component {


    state = {
        filterBy: {
            searchText: '',
        }
    }

    render() {
        return <section className="search-line flex">
            <input type="text" name="mailText"
                value={this.state.filterBy.mailText}
                placeholder="What are you looking for?"
                onChange={this.handleChange} />
        </section>
    }


}