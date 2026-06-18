(function () {
  class TuspValueWithoutTax extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });

      /* =========================
         HEADER
      ========================= */
      this._title = "TUSP VALUE WITHOUT TAX";

      /* =========================
         MAIN VALUES
      ========================= */
      this._mainValue = "₹12,244";
      this._croreValue = ".81 Crore";

      /* =========================
         SUB TITLE
      ========================= */
      this._subTitle = "TOTAL UNIT SALE PRICE (W/O TAX)";

      /* =========================
         AVG SALES PRICE
      ========================= */
      this._avgSalesPrice = "₹19,134.73";
      this._avgUnit = "per sq ft";

      this.render();
    }

    connectedCallback() {
      this.render();
    }

    /* =========================
       METHODS
    ========================= */

    setTitle(title) {
      this._title = title;
      this.render();
    }

    setTuspValue(mainValue, croreValue) {
      this._mainValue = mainValue;
      this._croreValue = croreValue;
      this.render();
    }

    setAvgSalesPrice(value, unit) {
      this._avgSalesPrice = value;
      this._avgUnit = unit;
      this.render();
    }

    render() {
      this.shadowRoot.innerHTML = `
      <style>

      *{
        box-sizing:border-box;
        font-family:Arial,sans-serif;
      }

      .outer{
        width:100%;
        height:100%;
        padding:4px;
      }

      .card{
        width:100%;
        height:100%;
        background:#FFFFFF;
        border-radius:8px;
        overflow:hidden;
        box-shadow:0 0 10px rgba(0,0,0,.10);
        display:flex;
        flex-direction:column;
      }

      .header{
        background:#16263B;
        color:#FFFFFF;
        padding:12px 18px;
        font-size:13px;
        font-weight:700;
        letter-spacing:1px;
      }

      .body{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        padding:18px;
      }

      .main-value{
        font-size:54px;
        font-weight:800;
        color:#1F3552;
        line-height:1;
        text-align:center;
      }

      .crore-value{
        font-size:26px;
        font-weight:800;
        color:#F97316;
        margin-top:4px;
        text-align:center;
      }

      .sub-title{
        margin-top:14px;
        font-size:11px;
        font-weight:700;
        color:#8C99AB;
        letter-spacing:2px;
        text-transform:uppercase;
        text-align:center;
      }

      .avg-box{
        width:100%;
        margin-top:18px;
        background:#ECE8E8;
        border-radius:6px;
        padding:10px 12px;
        text-align:center;
      }

      .avg-label{
        font-size:12px;
        color:#7D8CA3;
        margin-bottom:2px;
      }

      .avg-value{
        font-size:18px;
        font-weight:800;
        color:#16263B;
      }

      .avg-unit{
        font-size:12px;
        font-weight:600;
        color:#7D8CA3;
      }

      </style>

      <div class="outer">

        <div class="card">

          <div class="header">
            ${this._title}
          </div>

          <div class="body">

            <div class="main-value">
              ₹${Number(this._mainValue).toLocaleString("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>

            <div class="crore-value">
              ${this._croreValue}
            </div>

            <div class="sub-title">
              ${this._subTitle}
            </div>

            <div class="avg-box">

              <div class="avg-label">
                Avg Sales Price
              </div>

              <div>
                <span class="avg-value">
                  ${Number(this._avgSalesPrice).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>

                <span class="avg-unit">
                  ${this._avgUnit}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
      `;
    }
  }

  if (!customElements.get("com-max-tuspvaluewithouttax")) {
    customElements.define("com-max-tuspvaluewithouttax", TuspValueWithoutTax);
  }
})();
