export class SearchLine extends React.Component {


    state = {
        filterBy: {
            searchText: '',
        }
    }

    handleChange = (ev) => {

        const callback = () => {
            this.props.setFilter('searchText', this.state.filterBy.searchText);
        };
        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;
        this.setState({ filterBy: { searchText: ev.target.value } }, callback);
    }


    render() {
        return <section className="search-line flex">
            <input type="text" name="searchText"
                value={this.state.filterBy.searchText}
                placeholder="What are you looking for?"
                onChange={this.handleChange}  />
        </section>
    }


}