import { Link } from "react-router-dom";

export function NotFoundPage(){
    return (
        <section>
            <h1> 404 - Страница не найдена </h1>
            <Link to='/'>Вернуться в обзор</Link>
        </section>
    )
}