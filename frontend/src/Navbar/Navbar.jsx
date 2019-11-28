import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div data-component="navbar">
  <nav className="navbar p-0 fixed-top" style={{boxShadow: '2px 2px 2px #dedede'}}>
    <div style={{width: '100%'}}><a className="navbar-brand px-1 float-left" href="index.html"><span className="d-inline-block" style={{fontFamily: '"Oswald",sans-serif', fontSize: '36px', color: '#fff'}} title="Projekty Grupowe Politechniki Gdańskiej">PG²</span></a>
      <div className="right-links float-right mr-4">
        <a href="index.html" className="home" title="Strona główna"><i className="fa fa-home mr-3" /></a>
        <div className="d-inline dropdown rounded-0 mx-3">
          <a className="dropdown-toggle" id="tools" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" title="Ustawienia"><i className="fa fa-wrench" aria-hidden="true" /></a>
          <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="tools">
            <a className="dropdown-item px-2" href="#">Preferencje</a>
          </div>
        </div>
        <div className="d-inline dropdown mr-3">
          <a className="dropdown-toggle" id="notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" title="Powiadomienia"><span>10</span><i className="fa fa-bell" /></a>
          <div className="dropdown-menu dropdown-menu-right rounded-0 pt-0" aria-labelledby="notifications">
            <div className="list-group">
              <div className="lg">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                  <h5 className="mb-1">Projekt XXX został wysłany do sprawdzenia</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Zlecono projekt YYY przez XYZ</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Projekt ZZZ został utworzony</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Projekt XXX został wysłany do sprawdzenia</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Projekt XXX został wysłany do sprawdzenia</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Projekt ZZZ został utworzony</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Projekt ZZZ został utworzony</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Projekt ZZZ został utworzony</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Zlecono projekt YYY przez XYZ</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                  <h5 className="mb-1">Zlecono projekt YYY przez XYZ</h5>
                  <p className="mb-0">11 czerwca 2019 | 23:59</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-inline dropdown mr-3">
          <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" title="Wiadomości"><i className="fa fa-envelope" /></a>
          <div className="dropdown-menu dropdown-menu-right rounded-0 text-center" aria-labelledby="messages">
            <a className="dropdown-item">Nie ma nowych wiadomości</a>
          </div>
        </div>
        <div className="d-inline dropdown">
          <a className="dropdown-toggle" id="messages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" title="Profil"><i className="fas fa-user mr-3" /></a>
          <div className="dropdown-menu dropdown-menu-right rounded-0" aria-labelledby="messages">
            <a className="dropdown-item" href="#">Edytuj mój profil</a>
            <a className="dropdown-item" href="#">Wyloguj</a>
          </div>
        </div>
      </div>
      <form className="right-links form-inline float-right" style={{margin: '0 180px 0 0'}}>
        <div className="d-inline dropdown">
          <a className="dropdown-toggle" id="filters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#" title="Filtry"><i className="fas fa-filter" /></a>
          <div className="dropdown-menu dropdown-menu-left rounded-0" aria-labelledby="filters">
            <a className="dropdown-item" href="#">Utwórz nowy filtr</a>
            <a className="dropdown-item" href="#">Edytuj filtr</a>
            <a className="dropdown-item" href="#">Pomoc</a>
            <a className="dropdown-item" href="#">Usuń filtr</a>
          </div>
        </div>
        <input className="form-control form-control-sm mr-3 ml-3" type="text" placeholder="Szukaj" aria-label="search" />
        <a href="#" id="search" title="Szukaj"><i className="fas fa-search" aria-hidden="true" /></a>
      </form>
    </div>
  </nav>
</div>

        );
    }
}

export { Navbar };