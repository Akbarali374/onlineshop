import React from 'react'

function Navbar() {
    return (
        <>
            <div className="navbar">

                <div className="nav1">

                    <div className="logo">
                        <img src="./public/imgs/Group 1.png" alt="" />
                        <h1>MIXEL.UZ</h1>
                    </div>

                    <div className="search">
                        <select name="" id="">
                            <option value="">All category</option>
                            <option value="">All category</option>
                            <option value="">All category</option>
                            <option value="">All category</option>
                            <option value="">All category</option>
                            <option value="">All category</option>
                            <option value="">All category</option>
                        </select>
                        <form action="">
                            <input placeholder='Телефоны и бытовая' type="text" />
                            <button>Search</button>
                        </form>
                    </div>
                    <div className="icons">
                        <div className="icon1">
                            {/* <CiUser /> */}
                            <p>Exit</p>
                        </div>
                        <div className="icon2">

                        </div>
                    </div>
                </div>



                <nav className="menu">
                    <a href="#">Наши магазины</a>
                    <a href="#">Моноблоки</a>
                    <a href="#">Телефоны, планшеты</a>
                    <a href="#">Ноутбуки</a>
                    <a href="#">Комплектующие</a>
                    <a href="#">Сетевое оборудование</a>
                    <a href="#">Оргтехника</a>
                </nav>



                <div className="right">
                    <a href="#">Войти</a>
                    <a href="#">Сравнение</a>
                    <a href="#">Избранное</a>
                    <a href="#">Корзина</a>
                </div>
            </div>

        </>
    )
}

export default Navbar