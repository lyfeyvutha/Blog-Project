<script
      async=""
      src="https://www.google-analytics.com/analytics.js"
    ></script>
    <script>
      function gaOptout() {
        (document.cookie =
          disableStr + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/"),
          (window[disableStr] = !0);
      }
      var gaProperty = "UA-140390252-1",
        disableStr = "ga-disable-" + gaProperty;
      document.cookie.indexOf(disableStr + "=true") > -1 &&
        (window[disableStr] = !0);
      if (true) {
        (function (i, s, o, g, r, a, m) {
          i["GoogleAnalyticsObject"] = r;
          (i[r] =
            i[r] ||
            function () {
              (i[r].q = i[r].q || []).push(arguments);
            }),
            (i[r].l = 1 * new Date());
          (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
          a.async = 1;
          a.src = g;
          m.parentNode.insertBefore(a, m);
        })(
          window,
          document,
          "script",
          "https://www.google-analytics.com/analytics.js",
          "ga"
        );
      }
      if (typeof ga === "function") {
        ga("create", "UA-140390252-1", "auto", {});
        ga("set", "anonymizeIp", true);
      }
