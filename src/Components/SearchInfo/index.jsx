
import './searchInfo.scss'




function SearchInfo({ searchText, searchCount }) {

    return (
        <>

        
            {searchText && <section className="searchInfo">
                По запросу <span>{searchText}</span> найдено {searchCount} товаров
            </section>}
        </>
    );
}

export default SearchInfo;

