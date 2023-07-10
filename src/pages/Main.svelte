<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();

</script>

<header>
    <div class="info-bar">
      <div class="info-bar__time">{hour}:{min}</div>
      <div class="info-bar__icon">
        <img src="asset/chartbar.svg" alt="" />
        <img src="asset/wifi.svg" alt="" />
        <img src="asset/battery.svg" alt="" />
      </div>
    </div>
    <div class="manu-bar">
      <div class="manu-bar__loacation">
        <div>역삼1동</div>
        <img class="manu-bar__arrow" src="asset/arrow.svg" alt="" />
      </div>
      <div class="manu-bar__icon">
        <img src="asset/serch.svg" alt="" />
        <img src="asset/manu.svg" alt="" />
        <img src="asset/alert.svg" alt="" />
      </div>
    </div>
  </header>

  <main>
    <a class="BT" href="#/write">+글쓰기</a>
  </main>

  <footer>
    <div class="footer-block">
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="asset/home.svg" alt="" />
        </div>
        <div class="footer-icon__dcr">홈</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="asset/doc.svg" alt="" />
        </div>
        <div class="footer-icon__dcr">동내생활</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="asset/loca.svg" alt="" />
        </div>
        <div class="footer-icon__dcr">내 위치</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="asset/chat.svg" alt="" />
        </div>
        <div class="footer-icon__dcr">채팅</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="asset/user.svg" alt="" />
        </div>
        <div class="footer-icon__dcr">나의 당근</div>
      </div>
    </div>
  </footer>
  <div class="media-info-msg">화면 사이즈를 줄여주세요</div>