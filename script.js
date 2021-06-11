function mudarTela() {
  const etapa_1 = document.querySelector(".etapa_1");
  const etapa_2 = document.querySelector(".etapa_2");
  const etapa_3 = document.querySelector(".etapa_3");
  const etapa_4 = document.querySelector(".etapa_4");
  const etapa_5 = document.querySelector(".etapa_5");
  const etapa_6 = document.querySelector(".etapa_6");
  const etapa_7 = document.querySelector(".etapa_7");

  etapa_1.style.display = "block";
  const radios_et1 = document.querySelectorAll(
    ".form_etapa_1 input[type='radio']"
  );

  const p1 = document.querySelector(".p1");

  radios_et1.forEach((r) => {
    r.addEventListener("click", () => {
      etapa_1.style.display = "none";
      etapa_2.style.display = "block";
      p1.classList.add("ativo");
    });
  });

  const radios_et2 = document.querySelectorAll(
    ".form_etapa_2 input[type='radio']"
  );

  const p2 = document.querySelector(".p2");

  radios_et2.forEach((r) => {
    r.addEventListener("click", () => {
      etapa_2.style.display = "none";
      etapa_3.style.display = "block";
      p2.classList.add("ativo");
    });
  });

  const btn_etapa_3 = document.querySelector(".etapa_3_btn");

  const p3 = document.querySelector(".p3");

  btn_etapa_3.addEventListener("click", (e) => {
    e.preventDefault();

    etapa_3.style.display = "none";
    etapa_4.style.display = "block";
    p3.classList.add("ativo");
  });

  const btn_etapa_4 = document.querySelector(".etapa_4_btn");
  const p4 = document.querySelector(".p4");

  btn_etapa_4.addEventListener("click", (e) => {
    e.preventDefault();

    etapa_4.style.display = "none";
    etapa_5.style.display = "block";
    p4.classList.add("ativo");
  });

  const radios_et5 = document.querySelectorAll(
    ".form_etapa_5 input[type='radio']"
  );

  const p5 = document.querySelector(".p5");

  radios_et5.forEach((r) => {
    r.addEventListener("click", () => {
      etapa_5.style.display = "none";
      etapa_6.style.display = "block";

      p5.classList.add("ativo");
    });
  });

  const radios_et6 = document.querySelectorAll(
    ".form_etapa_6 input[type='radio']"
  );
  const p6 = document.querySelector(".p6");

  radios_et6.forEach((r) => {
    r.addEventListener("click", () => {
      etapa_6.style.display = "none";
      etapa_7.style.display = "block";
      p6.classList.add("ativo");
    });
  });
}
mudarTela();

function obterValorDoRange() {
  let range = document.querySelector(".altura");
  let value = document.querySelector(".altura_local");

  range.addEventListener("input", function () {
    value.textContent = this.value;
  });
}
obterValorDoRange();

function obterPeso() {
  let rg_peso = document.querySelector(".peso");
  let vl_peso = document.querySelector(".exibir_peso");

  rg_peso.addEventListener("input", function () {
    vl_peso.textContent = this.value;
  });
}
obterPeso();

function faq() {
  const accordionList = document.querySelectorAll(" dt");
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

faq();
