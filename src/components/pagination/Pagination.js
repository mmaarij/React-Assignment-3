import './Pagination.css'
const Pagination = () =>
{
    return(
        <div>
            <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li data-link="1" class="Pagination-item">
                    <a id = "pg-btn" href="#" class="btn Pagination-link">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="flicon-pagination-first"><path d="M10 11L5 6l5-5M2.5 11c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5z"></path></svg>
                    </span>
                    </a>
                </li>
                <li data-link="prev_page" class="Pagination-item">
                    <a href="#" id = "pg-btn" class="btn paginate_button Pagination-link">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="flicon-pagination-prev"><path d="M8 11L3 6l5-5v10z"></path></svg>
                    </span>
                    </a>
                </li>
              
                <li class="page-item"><a class="page-link link-secondary fw-bold" href="#" >1</a></li>
                <li class="page-item"><a class="page-link link-secondary fw-bold" href="#">2</a></li>
                <li class="page-item"><a class="page-link link-secondary fw-bold" href="#">3</a></li>
                <li data-link="next_page" class="Pagination-item">
                <a href="#" id = "pg-btn" class="btn Pagination-link">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="flicon-pagination-next"><path d="M4 1l5 5-5 5"></path></svg>
                </span>
                </a>
                </li>

                <li data-link="last_page" class="Pagination-item">
                    <a href="#" id = "pg-btn" class="btn Pagination-link">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" class="flicon-pagination-last"><path d="M2 1l5 5-5 5M9.5 1c.28 0 .5.22.5.5v9c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5z"></path></svg>
                    </span>
                    </a>
                </li>

            </ul>
            </nav>
        </div>
    );
}

export default Pagination