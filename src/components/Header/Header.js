import React from "react";

const Header = () => {

    return (
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0"
                    src="https://cdn.pixabay.com/photo/2018/09/27/09/18/web-3706551_960_720.jpg" alt="..." /></div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">Olá visitante.</h1>
                    <p>Olá, estou em busca de aprimorar meus conhecimentos sobre programação web, essa Page funcionara como um blog
                        onde irei postar sobre meus projetos pessoas, você pode ver meus meus projetos no github no botão abaixo, enjoy yourself!
                    </p>
                    <a class="btn btn-primary" href="https://github.com/matheusmendescosta">Meu GitHub!</a>
                </div>
            </div>
        </div>
    )
}

export default Header;