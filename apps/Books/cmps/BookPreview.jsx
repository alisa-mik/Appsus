export function BookPreview({book}) {
    return (
        <article className="book-preview">
            <h3>{book.title}</h3>
            <h4>Author: {book.authors}</h4>
            <img src={book.thumbnail} alt="img"/>
            <p>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</p>
        </article>

    )
}