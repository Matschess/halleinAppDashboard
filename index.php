<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Verwaltung</title>
    <!-- Stylesheets -->
    <link rel="stylesheet" href="assets/css/style.css" media="screen">
    <link rel="stylesheet" href="assets/css/elements.css" media="screen">
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
    <!-- Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/smoothness/jquery-ui.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    <!-- Libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/js/jquery.tooltipster.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/css/tooltipster.min.css" rel="stylesheet">
    <link href="assets/css/tooltipster.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/css/themes/tooltipster-noir.min.css" rel="stylesheet">
    <!-- Scripts -->
    <script src="assets/js/main.js"></script>
</head>
<body>
<div class="topbar">
    <h1>Verwaltungsdashboard</h1>
    <div class="user">
        Benutzername

        <img src="assets/imgs/user.jpg"/>
        <img class="icon" src="assets/icons/arrow_down.png"/>
    </div>
    <div class="options">
        <ul>
            <li>Einstellungen</li>
            <li>Nachrichten</li>
            <li>Logout</li>
        </ul>
    </div>
</div>
<div class="navbar">
    <ul>
        <li>Dashboard</li>
        <li>Mahlzeiten</li>
        <li>Feedback</li>
        <li>Restuarantseite</li>
        <li>Hilfe</li>
    </ul>
</div>
<div class="container">
    <div class="dashboardBox">
        <div class="notification alert">3</div>
        <div class="title">Alert-Kasten</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eligendi eos est ex
            exercitationem fuga nobis provident ratione recusandae soluta?
        </div>
    </div>
    <div class="dashboardBox">
        <div class="notification success"><i class="material-icons">done</i></div>
        <div class="title">Erledigt-Kasten</div>
        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam libero quidem rem sequi
            tenetur! A?
        </div>
    </div>
    <div class="fullBox">
        <div class="title loading">Speichern...</div>
        <div class="content">
            Radio-Button:
            <br/>
            <input type="radio" id="mc" name="radiobutton" value="yes" checked/>
            <label for="mc">Ja</label>
            <input type="radio" id="vi" name="radiobutton" value="no"/>
            <label for="vi">Nein</label>
            <br/>
            <br/>
            Button:
            <br/>
            <button><i class="material-icons">done</i>Erstellen</button>
            <br/>
            <br/>
            Textbereich:
            <br/>
            <textarea>Textbereich</textarea>
            <br/>
            <br/>
            Tags:
            <br/>
            <tag>Test</tag>
        </div>
    </div>
</div>
<div class="actionbar">
    <div class="icon tooltip" title="Plaer"><i class="material-icons">done</i></div>
    <div class="icon bottom"><i class="material-icons">delete</i></div>
</div>
</body>
</html>
