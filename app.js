(() => {
    const els = {
      langBtn: document.getElementById("langBtn"),
      langFlag: document.getElementById("langFlag"),
      langModal: document.getElementById("langModal"),
      langList: document.getElementById("langList"),
      langModalTitle: document.getElementById("langModalTitle"),
  
      marketForex: document.getElementById("marketForex"),
      marketOtc: document.getElementById("marketOtc"),
  
      pairBtn: document.getElementById("pairBtn"),
      tfBtn: document.getElementById("tfBtn"),
  
      pairLabel: document.getElementById("pairLabel"),
      tfLabel: document.getElementById("tfLabel"),
      pairValue: document.getElementById("pairValue"),
      pairValueFlags: document.getElementById("pairValueFlags"),
      pairOutFlags: document.getElementById("pairOutFlags"),
      tfValue: document.getElementById("tfValue"),
  
      getSignalBtn: document.getElementById("getSignalBtn"),
      getSignalText: document.getElementById("getSignalText"),
  
      signalCard: document.getElementById("signalCard"),
      emptyState: document.getElementById("emptyState"),
      loadingState: document.getElementById("loadingState"),
      loadingText: document.getElementById("loadingText"),
      loadingProgress: document.getElementById("loadingProgress"),
  
      pillMarketK: document.getElementById("pillMarketK"),
      pillMarketV: document.getElementById("pillMarketV"),
      pillAccuracyK: document.getElementById("pillAccuracyK"),
      pillAccuracyV: document.getElementById("pillAccuracyV"),
  
      pairK: document.getElementById("pairK"),
      tfK: document.getElementById("tfK"),
      pairOut: document.getElementById("pairOut"),
      tfOut: document.getElementById("tfOut"),
  
      signalBadge: document.getElementById("signalBadge"),
      signalV: document.getElementById("signalV"),
  
      title: document.getElementById("title"),
      subtitle: document.getElementById("subtitle"),
      emptyText: document.getElementById("emptyText"),
  
      pairModal: document.getElementById("pairModal"),
      tfModal: document.getElementById("tfModal"),
      pairSearch: document.getElementById("pairSearch"),
      pairList: document.getElementById("pairList"),
      tfList: document.getElementById("tfList"),
      pairModalTitle: document.getElementById("pairModalTitle"),
      tfModalTitle: document.getElementById("tfModalTitle"),
    };
  
    const LANGUAGES = [
      { code: "ru", name: "Русский", flag: "ru" },
      { code: "en", name: "English", flag: "us" },
      { code: "br", name: "Português", flag: "br" },
      { code: "uz", name: "O'zbek", flag: "uz" },
      { code: "ar", name: "العربية", flag: "sa" },
      { code: "hi", name: "हिन्दी", flag: "in" },
    ];
  
    // Функция для получения языка по умолчанию из localStorage или английский
    function getDefaultLang() {
      const savedLang = localStorage.getItem("tradingAppLang");
      return savedLang && LANGUAGES.some(l => l.code === savedLang) ? savedLang : "en";
    }
  
    const DICT = {
      ru: {
        title: "Сигналы для трейдинга",
        subtitle: "Выберите рынок, пару и таймфрейм — и получите сигнал.",
        market: "Рынок",
        accuracy: "Точность",
        pair: "Пара",
        timeframe: "Таймфрейм",
        pairPick: "Выбор валютной пары",
        tfPick: "Выбор таймфрейма",
        pairLabel: "Валютная пара",
        tfLabel: "Таймфрейм",
        getSignal: "Получить сигнал",
        signal: "Сигнал",
        buy: "Покупать",
        sell: "Продавать",
        empty: "Нажмите «Получить сигнал», чтобы увидеть карточку.",
        hint: "Это демонстрационный генератор. Подключите бэкенд/API для реальных сигналов.",
        searchPh: "Поиск (например EUR)",
        analyzing: "Анализ рынка...",
        calculating: "Вычисление сигнала...",
        finalizing: "Формирование результата...",
        langPick: "Выбор языка",
        wait: "Wait",
      },
      en: {
        title: "Trading signals",
        subtitle: "Pick market, pair and timeframe — then get a signal.",
        market: "Market",
        accuracy: "Accuracy",
        pair: "Pair",
        timeframe: "Timeframe",
        pairPick: "Choose currency pair",
        tfPick: "Choose timeframe",
        pairLabel: "Currency pair",
        tfLabel: "Timeframe",
        getSignal: "Get signal",
        signal: "Signal",
        buy: "BUY",
        sell: "SELL",
        empty: "Click 'Get signal' to show the card.",
        hint: "Demo generator. Connect a backend/API for real signals.",
        searchPh: "Search (e.g. EUR)",
        analyzing: "Analyzing market...",
        calculating: "Calculating signal...",
        finalizing: "Finalizing result...",
        langPick: "Choose language",
        wait: "Wait",
      },
      br: {
        title: "Sinais de negociação",
        subtitle: "Escolha mercado, par e período — e receba um sinal.",
        market: "Mercado",
        accuracy: "Precisão",
        pair: "Par",
        timeframe: "Período",
        pairPick: "Escolher par de moedas",
        tfPick: "Escolher período",
        pairLabel: "Par de moedas",
        tfLabel: "Período",
        getSignal: "Obter sinal",
        signal: "Sinal",
        buy: "COMPRAR",
        sell: "VENDER",
        empty: "Clique em 'Obter sinal' para ver o cartão.",
        hint: "Gerador de demonstração. Conecte um backend/API para sinais reais.",
        searchPh: "Pesquisar (ex. EUR)",
        analyzing: "Analisando mercado...",
        calculating: "Calculando sinal...",
        finalizing: "Finalizando resultado...",
        langPick: "Escolher idioma",
        wait: "Aguarde",
      },
      uz: {
        title: "Savdo signallari",
        subtitle: "Bo'zorni, juftlikni va vaqt oralig'ini tanlang — va signal oling.",
        market: "Bo'zor",
        accuracy: "Aniqlik",
        pair: "Juftlik",
        timeframe: "Vaqt oralig'i",
        pairPick: "Valyuta juftligini tanlash",
        tfPick: "Vaqt oralig'ini tanlash",
        pairLabel: "Valyuta juftligi",
        tfLabel: "Vaqt oralig'i",
        getSignal: "Signal olish",
        signal: "Signal",
        buy: "SOTIB OLISH",
        sell: "SOTISH",
        empty: "Kartani ko'rish uchun 'Signal olish'ni bosing.",
        hint: "Namoyish generatori. Haqiqiy signallar uchun backend/API ulang.",
        searchPh: "Qidirish (masalan EUR)",
        analyzing: "Bo'zorni tahlil qilish...",
        calculating: "Signalni hisoblash...",
        finalizing: "Natijani yakunlash...",
        langPick: "Tilni tanlash",
        wait: "Kutish",
      },
      ar: {
        title: "إشارات التداول",
        subtitle: "اختر السوق والزوج والإطار الزمني — واحصل على إشارة.",
        market: "السوق",
        accuracy: "الدقة",
        pair: "الزوج",
        timeframe: "الإطار الزمني",
        pairPick: "اختر زوج العملات",
        tfPick: "اختر الإطار الزمني",
        pairLabel: "زوج العملات",
        tfLabel: "الإطار الزمني",
        getSignal: "الحصول على إشارة",
        signal: "الإشارة",
        buy: "شراء",
        sell: "بيع",
        empty: "انقر على 'الحصول على إشارة' لعرض البطاقة.",
        hint: "مولد تجريبي. قم بتوصيل backend/API للإشارات الحقيقية.",
        searchPh: "البحث (مثال EUR)",
        analyzing: "تحليل السوق...",
        calculating: "حساب الإشارة...",
        finalizing: "إنهاء النتيجة...",
        langPick: "اختر اللغة",
        wait: "انتظر",
      },
      hi: {
        title: "ट्रेडिंग सिग्नल",
        subtitle: "बाज़ार, जोड़ी और समय सीमा चुनें — और सिग्नल प्राप्त करें।",
        market: "बाज़ार",
        accuracy: "सटीकता",
        pair: "जोड़ी",
        timeframe: "समय सीमा",
        pairPick: "मुद्रा जोड़ी चुनें",
        tfPick: "समय सीमा चुनें",
        pairLabel: "मुद्रा जोड़ी",
        tfLabel: "समय सीमा",
        getSignal: "सिग्नल प्राप्त करें",
        signal: "सिग्नल",
        buy: "खरीदें",
        sell: "बेचें",
        empty: "कार्ड देखने के लिए 'सिग्नल प्राप्त करें' पर क्लिक करें।",
        hint: "डेमो जेनरेटर। वास्तविक सिग्नल के लिए backend/API कनेक्ट करें।",
        searchPh: "खोजें (उदा. EUR)",
        analyzing: "बाज़ार का विश्लेषण...",
        calculating: "सिग्नल की गणना...",
        finalizing: "परिणाम अंतिम रूप देना...",
        langPick: "भाषा चुनें",
        wait: "प्रतीक्षा",
      },
    };
  
    const state = {
      lang: getDefaultLang(),
      market: "Forex",
      pair: "EUR/USD",
      tf: "1M",
    };
  
    // Хранилище кулдаунов для валютных пар
    const cooldowns = {};
  
    // Функция для конвертации таймфрейма в миллисекунды
    function timeframeToMs(tf) {
      const num = parseInt(tf);
      if (tf.includes("S")) {
        return num * 1000; // секунды
      } else if (tf.includes("M")) {
        return num * 60 * 1000; // минуты
      } else if (tf.includes("H")) {
        return num * 60 * 60 * 1000; // часы
      } else if (tf.includes("D")) {
        return num * 24 * 60 * 60 * 1000; // дни
      }
      return 60000; // по умолчанию 1 минута
    }
  
    // Функция для получения ключа кулдауна (пара + рынок)
    function getCooldownKey(pair, market) {
      return market === "OTC" ? `${pair} OTC` : pair;
    }
  
    // Функция для проверки кулдауна
    function getCooldownRemaining(pair, market) {
      const key = getCooldownKey(pair, market);
      if (!cooldowns[key]) return 0;
      const remaining = cooldowns[key] - Date.now();
      return remaining > 0 ? remaining : 0;
    }
  
    // Функция для установки кулдауна
    function setCooldown(pair, market, tf) {
      const key = getCooldownKey(pair, market);
      const ms = timeframeToMs(tf);
      cooldowns[key] = Date.now() + ms;
    }
  
    // Функция для форматирования времени
    function formatTime(ms) {
      const seconds = Math.ceil(ms / 1000);
      if (seconds < 60) {
        return `${seconds}s`;
      }
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return secs > 0 ? `${minutes}m ${secs}s` : `${minutes}m`;
    }
  
    // Только "обычные" валютные пары (без крипто/металлов).
    const PAIRS = [
      "EUR/USD",
      "GBP/USD",
      "USD/JPY",
      "USD/CHF",
      "AUD/USD",
      "USD/CAD",
      "NZD/USD",
      "EUR/GBP",
      "EUR/JPY",
      "GBP/JPY",
      "EUR/CHF",
      "AUD/JPY",
      "EUR/AUD",
      "GBP/CHF",
      "GBP/AUD",
      "AUD/CAD",
      "CAD/JPY",
      "CHF/JPY",
      "EUR/CAD",
      "GBP/CAD",
      "AUD/CHF",
      "NZD/JPY",
      "EUR/NZD",
      "GBP/NZD",
      // Пары с RUB (Россия)
      "USD/RUB",
      "EUR/RUB",
      "GBP/RUB",
      "RUB/JPY",
      "RUB/EUR",
      "RUB/GBP",
      "CAD/RUB",
      "AUD/RUB",
      "CHF/RUB",
      // Пары с INR (Индия)
      "USD/INR",
      "EUR/INR",
      "GBP/INR",
      "INR/JPY",
      "AUD/INR",
      "CAD/INR",
      // Пары с BRL (Бразилия)
      "USD/BRL",
      "EUR/BRL",
      "GBP/BRL",
      "BRL/JPY",
      "AUD/BRL",
      // Пары с SAR (Саудовская Аравия)
      "USD/SAR",
      "EUR/SAR",
      "GBP/SAR",
      // Пары с UZS (Узбекистан)
      "USD/UZS",
      "EUR/UZS",
      "RUB/UZS",
    ];
  
    const TIMEFRAMES_FOREX = ["1M", "3M", "5M", "15M", "30M"];
    const TIMEFRAMES_OTC = ["5S", "15S", "30S", "1M", "3M", "5M", "15M"];
  
    function getTimeframes() {
      return state.market === "Forex" ? TIMEFRAMES_FOREX : TIMEFRAMES_OTC;
    }
  
    // Маппинг валют к флагам
    const CURRENCY_FLAGS = {
      EUR: "eu",
      USD: "us",
      GBP: "gb",
      JPY: "jp",
      CHF: "ch",
      AUD: "au",
      CAD: "ca",
      NZD: "au", // Новая Зеландия - используем австралийский флаг как запасной
      RUB: "ru", // Россия
      INR: "in", // Индия
      BRL: "br", // Бразилия
      SAR: "sa", // Саудовская Аравия
      UZS: "uz", // Узбекистан
    };
  
    function getFlagPath(currency) {
      const flagCode = CURRENCY_FLAGS[currency] || "us";
      return `svg/${flagCode}.svg`;
    }
  
    function getPairFlags(pair) {
      const [base, quote] = pair.split("/");
      return {
        base: getFlagPath(base),
        quote: getFlagPath(quote),
      };
    }
  
    function t(key) {
      return DICT[state.lang][key] ?? key;
    }
  
    function setLang(next) {
      state.lang = next;
      // Сохраняем выбранный язык в localStorage
      localStorage.setItem("tradingAppLang", next);
      
      const lang = LANGUAGES.find((l) => l.code === next);
      if (lang && els.langFlag) {
        els.langFlag.src = `svg/${lang.flag}.svg`;
        els.langFlag.alt = lang.code.toUpperCase();
      }
      document.documentElement.lang = next;
  
      els.title.textContent = t("title");
      els.subtitle.textContent = t("subtitle");
      els.pillMarketK.textContent = t("market");
      els.pillAccuracyK.textContent = t("accuracy");
      els.pairK.textContent = t("pair");
      els.tfK.textContent = t("timeframe");
      els.pairLabel.textContent = t("pairLabel");
      els.tfLabel.textContent = t("tfLabel");
      els.getSignalText.textContent = t("getSignal");
      els.emptyText.textContent = t("empty");
      els.pairModalTitle.textContent = t("pairPick");
      els.tfModalTitle.textContent = t("tfPick");
      els.langModalTitle.textContent = t("langPick");
      els.pairSearch.placeholder = t("searchPh");
  
      renderPairList(els.pairSearch.value || "");
      renderTfList();
      renderLangList();
    }
  
    function setMarket(market) {
      state.market = market;
      const isForex = market === "Forex";
      els.marketForex.classList.toggle("is-active", isForex);
      els.marketOtc.classList.toggle("is-active", !isForex);
      els.marketForex.setAttribute("aria-selected", String(isForex));
      els.marketOtc.setAttribute("aria-selected", String(!isForex));
  
      // Проверяем, доступен ли текущий таймфрейм в новом рынке
      const availableTfs = getTimeframes();
      if (!availableTfs.includes(state.tf)) {
        state.tf = availableTfs[0];
        els.tfValue.textContent = state.tf;
      }
  
      // Обновляем отображение пары (для OTC добавляем суффикс)
      syncPairUI();
      // Если модалка пар открыта — обновим список, чтобы суффикс сразу поменялся
      if (!els.pairModal.classList.contains("is-hidden")) {
        renderPairList(els.pairSearch.value || "");
      }
      // Если модалка таймфреймов открыта — обновим список
      if (!els.tfModal.classList.contains("is-hidden")) {
        renderTfList();
      }
    }
  
    function formatPairDisplay(pair) {
      return state.market === "OTC" ? `${pair} OTC` : pair;
    }
  
    function renderFlags(container, pair) {
      const flags = getPairFlags(pair);
      container.innerHTML = `
        <img src="${flags.base}" alt="" class="flag flag--round" />
        <img src="${flags.quote}" alt="" class="flag flag--round" />
      `;
    }
  
    function syncPairUI() {
      const display = formatPairDisplay(state.pair);
      els.pairValue.textContent = display;
      els.pairOut.textContent = display;
      renderFlags(els.pairValueFlags, state.pair);
      renderFlags(els.pairOutFlags, state.pair);
    }
  
    function openModal(which) {
      let modal;
      if (which === "pair") {
        modal = els.pairModal;
      } else if (which === "tf") {
        modal = els.tfModal;
      } else if (which === "lang") {
        modal = els.langModal;
      }
      
      if (!modal) return;
      
      modal.classList.remove("is-hidden");
      document.body.style.overflow = "hidden";
  
      // Небольшая задержка для правильной анимации
      requestAnimationFrame(() => {
        if (which === "pair") {
          els.pairSearch.value = "";
          renderPairList("");
          setTimeout(() => els.pairSearch.focus(), 100);
        } else if (which === "tf") {
          renderTfList();
        } else if (which === "lang") {
          renderLangList();
        }
      });
    }
  
    function closeModal(which) {
      let modal;
      if (which === "pair") {
        modal = els.pairModal;
      } else if (which === "tf") {
        modal = els.tfModal;
      } else if (which === "lang") {
        modal = els.langModal;
      }
      
      if (!modal) return;
      
      modal.classList.add("is-hidden");
      document.body.style.overflow = "";
      if (which === "pair") els.pairBtn.focus();
      if (which === "tf") els.tfBtn.focus();
      if (which === "lang") els.langBtn.focus();
    }
  
    function renderPairList(filter) {
      const q = (filter || "").trim().toUpperCase();
      const list = PAIRS.filter((p) => p.toUpperCase().includes(q));
      els.pairList.innerHTML = "";
      
      if (list.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.style.padding = "40px 20px";
        empty.style.textAlign = "center";
        empty.style.color = "var(--muted2)";
        empty.textContent = state.lang === "ru" ? "Ничего не найдено" : "No results found";
        els.pairList.appendChild(empty);
        return;
      }
      
      list.forEach((pair, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option" + (pair === state.pair ? " is-selected" : "");
        btn.setAttribute("role", "option");
        btn.setAttribute("aria-selected", String(pair === state.pair));
        const flags = getPairFlags(pair);
        const displayPair = formatPairDisplay(pair);
        
        btn.innerHTML = `
          <span class="option__flags">
            <img src="${flags.base}" alt="" class="option__flag" />
            <img src="${flags.quote}" alt="" class="option__flag" />
          </span>
          <span class="option__main">
            <span class="option__title">${escapeHtml(displayPair)}</span>
          </span>
          <span class="option__check" aria-hidden="true">${pair === state.pair ? "✓" : ""}</span>
        `;
        btn.addEventListener("click", () => {
          state.pair = pair;
          syncPairUI();
          updateCooldownUI();
          closeModal("pair");
        });
        els.pairList.appendChild(btn);
        
        // Анимация появления с задержкой
        requestAnimationFrame(() => {
          btn.style.opacity = "0";
          btn.style.transform = "translateY(10px)";
          btn.style.transition = "all .3s cubic-bezier(0.4, 0, 0.2, 1)";
          
          setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
          }, idx * 25);
        });
      });
    }
  
    function renderLangList() {
      els.langList.innerHTML = "";
      LANGUAGES.forEach((lang, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option" + (lang.code === state.lang ? " is-selected" : "");
        btn.setAttribute("role", "option");
        btn.setAttribute("aria-selected", String(lang.code === state.lang));
        
        btn.innerHTML = `
          <span class="option__flags">
            <img src="svg/${lang.flag}.svg" alt="" class="option__flag" />
          </span>
          <span class="option__main">
            <span class="option__title">${escapeHtml(lang.name)}</span>
          </span>
          <span class="option__check" aria-hidden="true">${lang.code === state.lang ? "✓" : ""}</span>
        `;
        btn.addEventListener("click", () => {
          setLang(lang.code);
          closeModal("lang");
        });
        els.langList.appendChild(btn);
        
        // Анимация появления с задержкой
        requestAnimationFrame(() => {
          btn.style.opacity = "0";
          btn.style.transform = "translateY(10px)";
          btn.style.transition = "all .3s cubic-bezier(0.4, 0, 0.2, 1)";
          
          setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
          }, idx * 25);
        });
      });
    }
  
    function renderTfList() {
      els.tfList.innerHTML = "";
      const timeframes = getTimeframes();
      timeframes.forEach((tf, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "option" + (tf === state.tf ? " is-selected" : "");
        btn.setAttribute("role", "option");
        btn.setAttribute("aria-selected", String(tf === state.tf));
        
        // Определяем подпись для таймфрейма
        let subtitle = "";
        if (tf.includes("S")) {
          subtitle = state.lang === "ru" ? "секунды" : "seconds";
        } else if (tf.includes("M")) {
          subtitle = state.lang === "ru" ? "минуты" : "minutes";
        } else if (tf.includes("H")) {
          subtitle = state.lang === "ru" ? "часы" : "hours";
        } else if (tf.includes("D")) {
          subtitle = state.lang === "ru" ? "дни" : "days";
        }
        
        btn.innerHTML = `
          <span class="option__main">
            <span class="option__title">${escapeHtml(tf)}</span>
            <span class="option__sub">${escapeHtml(subtitle)}</span>
          </span>
          <span class="option__check" aria-hidden="true">${tf === state.tf ? "✓" : ""}</span>
        `;
        btn.addEventListener("click", () => {
          state.tf = tf;
          els.tfValue.textContent = tf;
          updateCooldownUI();
          closeModal("tf");
        });
        els.tfList.appendChild(btn);
        
        // Анимация появления с задержкой
        requestAnimationFrame(() => {
          btn.style.opacity = "0";
          btn.style.transform = "translateY(10px)";
          btn.style.transition = "all .3s cubic-bezier(0.4, 0, 0.2, 1)";
          
          setTimeout(() => {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
          }, idx * 25);
        });
      });
    }
  
    function generateSignal() {
      // Добавляем текущее время в миллисекундах для большей случайности
      const seed = hash(`${state.market}|${state.pair}|${state.tf}|${Date.now()}|${Math.random()}`);
      const rnd = mulberry32(seed);
      const side = rnd() > 0.5 ? "BUY" : "SELL";
      const acc = Math.round(72 + rnd() * 23); // 72–95%
      return { side, accuracy: acc };
    }
  
    function showSignal() {
      // Проверяем кулдаун
      const remaining = getCooldownRemaining(state.pair, state.market);
      if (remaining > 0) {
        return; // Кулдаун еще активен
      }
  
      // Добавляем loading состояние
      els.getSignalBtn.classList.add("is-loading");
      els.getSignalBtn.disabled = true;
  
      // Скрываем предыдущую карточку если есть
      if (!els.signalCard.classList.contains("is-hidden")) {
        els.signalCard.classList.add("is-hidden");
      }
      els.emptyState.style.display = "none";
      els.loadingState.classList.remove("is-hidden");
  
      // Сбрасываем прогресс-бар в начало
      els.loadingProgress.style.width = "0%";
  
      // Анимация прогресса и текста
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += Math.random() * 8 + 3;
        if (progress > 95) progress = 95;
        els.loadingProgress.style.width = `${progress}%`;
      }, 150);
  
      // Смена текста во время загрузки
      const stages = [
        { text: t("analyzing"), delay: 0 },
        { text: t("calculating"), delay: 800 },
        { text: t("finalizing"), delay: 1600 },
      ];
  
      stages.forEach((stage) => {
        setTimeout(() => {
          els.loadingText.textContent = stage.text;
        }, stage.delay);
      });
  
      // Симуляция загрузки (2.5-3.5 секунды)
      const delay = 2500 + Math.random() * 1000;
  
      setTimeout(() => {
        clearInterval(progressInterval);
        els.loadingProgress.style.width = "100%";
  
        setTimeout(() => {
          const { side, accuracy } = generateSignal();
  
          els.pillMarketV.textContent = state.market;
          els.pillAccuracyV.textContent = `${accuracy}%`;
          syncPairUI();
          els.tfOut.textContent = state.tf;
  
          const sideText = side === "BUY" ? t("buy") : t("sell");
          els.signalV.textContent = sideText;
          els.signalBadge.classList.toggle("signalBadge--buy", side === "BUY");
          els.signalBadge.classList.toggle("signalBadge--sell", side === "SELL");
  
          // Показываем карточку с анимацией
          els.loadingState.classList.add("is-hidden");
          els.signalCard.classList.remove("is-hidden");
  
          // Устанавливаем кулдаун для этой пары
          setCooldown(state.pair, state.market, state.tf);
  
          // Убираем loading
          els.getSignalBtn.classList.remove("is-loading");
          els.getSignalBtn.disabled = false;
  
          // Обновляем UI кнопки
          updateCooldownUI();
  
          // Фокус на карточку для accessibility
          els.signalCard.focus();
        }, 200);
      }, delay);
    }
  
    // Функция для обновления UI кулдауна
    function updateCooldownUI() {
      const remaining = getCooldownRemaining(state.pair, state.market);
      
      if (remaining > 0) {
        // Блокируем кнопку и показываем таймер
        els.getSignalBtn.disabled = true;
        els.getSignalBtn.classList.add("is-cooldown");
        const timeText = formatTime(remaining);
        els.getSignalText.textContent = `${t("wait")}: ${timeText}`;
      } else {
        // Разблокируем кнопку
        els.getSignalBtn.disabled = false;
        els.getSignalBtn.classList.remove("is-cooldown");
        els.getSignalText.textContent = t("getSignal");
      }
    }
  
    // Запускаем обновление кулдауна каждую секунду
    setInterval(() => {
      updateCooldownUI();
    }, 1000);
  
    function escapeHtml(s) {
      return String(s)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
    }
  
    function hash(str) {
      // FNV-1a 32-bit
      let h = 0x811c9dc5;
      for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
      }
      return h >>> 0;
    }
  
    function mulberry32(a) {
      return function () {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }
  
    // Events
    els.langBtn.addEventListener("click", () => {
      openModal("lang");
    });
  
    els.marketForex.addEventListener("click", () => setMarket("Forex"));
    els.marketOtc.addEventListener("click", () => setMarket("OTC"));
  
    els.pairBtn.addEventListener("click", () => openModal("pair"));
    els.tfBtn.addEventListener("click", () => openModal("tf"));
  
    els.pairSearch.addEventListener("input", (e) => renderPairList(e.target.value));
  
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const close = target.getAttribute("data-close");
      if (close === "pair" && !els.pairModal.classList.contains("is-hidden")) {
        closeModal("pair");
      }
      if (close === "tf" && !els.tfModal.classList.contains("is-hidden")) {
        closeModal("tf");
      }
      if (close === "lang" && !els.langModal.classList.contains("is-hidden")) {
        closeModal("lang");
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!els.pairModal.classList.contains("is-hidden")) {
          closeModal("pair");
          e.preventDefault();
        } else if (!els.tfModal.classList.contains("is-hidden")) {
          closeModal("tf");
          e.preventDefault();
        } else if (!els.langModal.classList.contains("is-hidden")) {
          closeModal("lang");
          e.preventDefault();
        }
      }
    });
  
    els.getSignalBtn.addEventListener("click", showSignal);
  
    // Init
    setLang(state.lang);
    setMarket(state.market);
    syncPairUI();
    els.tfValue.textContent = state.tf;
    updateCooldownUI();
  })();

// Telegram WebApp initialization
function initTelegramWebApp() {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Уведомляем Telegram о готовности приложения
    tg.ready();

    // Растягиваем окно на всю доступную высоту
    tg.expand();

    // Запрашиваем полноэкранный режим
    tg.requestFullscreen();

    // Дополнительные настройки для лучшего отображения
    tg.enableClosingConfirmation();

    // Устанавливаем отступ для safe area (iPhone notch/Dynamic Island) + дополнительно 20px
    const header = document.querySelector(".header");
    if (header && tg.safeAreaInsets) {
      const topInset = tg.safeAreaInsets.top || 0;
      const additionalPadding = 20;
      header.style.paddingTop = `${topInset + additionalPadding}px`;
    }
  }
}

// Инициализируем при загрузке страницы
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTelegramWebApp);
} else {
  // Если страница уже загружена, пробуем сразу
  initTelegramWebApp();
  // Также пробуем через небольшую задержку на случай, если скрипт Telegram еще загружается
  setTimeout(initTelegramWebApp, 100);
}
