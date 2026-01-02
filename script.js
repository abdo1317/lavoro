// Application State
let currentUser = null;
let currentLanguage = 'it'; // Set to Italian by default
let storageAvailable = true;
let currentTheme = 'light';

const THEME_STORAGE_KEY = 'workHoursTheme';

// Translations
const translations = {
    ar: {
        // Navigation
        dashboard: 'لوحة التحكم',
        calculator: 'الحاسبة',
        records: 'السجلات',
        settings: 'الإعدادات',
        logout: 'خروج',
        themeDark: 'الوضع الليلي',
        themeLight: 'الوضع النهاري',
        
        // Calculator
        calculatorTitle: 'حاسبة ساعات العمل',
        calculatorDesc: 'احسب ساعات العمل والساعات الإضافية لكل يوم',
        employeeName: 'اسم الموظف',
        monthYear: 'الشهر والسنة',
        dailyHours: 'ساعات العمل اليومية',
        dailyRate: 'سعر اليوم العادي',
        overtimeRate: 'سعر الساعة الإضافية',
        holidays: 'أيام العطلات الإضافية',
        holidaysPlaceholder: 'أدخل تواريخ العطلات (مثال: 2024-01-01, 2024-12-25)',
        generateDays: 'إنشاء أيام الشهر',
        fillOvertime: 'ملء ساعات إضافية',
        fillAll: 'ملء الكل',
        calculate: 'احسب الآن',
        clear: 'مسح البيانات',
        saveRecord: 'حفظ السجل',
        exportResults: 'تصدير النتائج',
        
        // Daily Entries
        dailyEntriesTitle: 'إدخال الساعات اليومية',
        dailyEntriesDesc: 'تأكيد الحضور وإدخال الساعات الإضافية لكل يوم',
        confirmAttendance: 'تأكيد الحضور',
        overtimeHours: 'ساعات إضافية',
        
        // Results
        resultsTitle: 'نتائج الحساب',
        totalDays: 'إجمالي الأيام',
        regularHours: 'الساعات العادية',
        overtimeHours: 'ساعات إضافية',
        regularSalary: 'الراتب العادي',
        overtimePay: 'مكافأة الساعات الإضافية',
        totalSalary: 'الإجمالي المستحق',
        
        // Records
        recordsTitle: 'سجلات الحسابات',
        recordsDesc: 'عرض وإدارة سجلات الحسابات السابقة',
        searchRecords: 'البحث في السجلات...',
        all: 'الكل',
        thisMonth: 'هذا الشهر',
        thisYear: 'هذا العام',
        noRecords: 'لا توجد سجلات حالياً',
        
        // Settings
        settingsTitle: 'الإعدادات',
        settingsDesc: 'تخصيص إعدادات النظام',
        generalSettings: 'الإعدادات العامة',
        companyName: 'اسم الشركة',
        currency: 'العملة الافتراضية',
        language: 'اللغة',
        calculationSettings: 'إعدادات الحساب',
        defaultDailyHours: 'ساعات العمل اليومية الافتراضية',
        dataSettings: 'إعدادات البيانات',
        changePassword: 'تغيير كلمة المرور',
        currentPassword: 'كلمة المرور الحالية',
        newPassword: 'كلمة المرور الجديدة',
        confirmPassword: 'تأكيد كلمة المرور',
        updatePassword: 'تحديث كلمة المرور',
        changeUsername: 'تغيير اسم المستخدم',
        newUsername: 'اسم المستخدم الجديد',
        updateUsername: 'تحديث اسم المستخدم',
        saveSettings: 'حفظ الإعدادات',
        resetSettings: 'استعادة الإعدادات الافتراضية',
        exportData: 'تصدير البيانات',
        importData: 'استيراد البيانات',
        
        // Messages
        loginSuccess: 'تم تسجيل الدخول بنجاح',
        loginError: 'اسم المستخدم أو كلمة المرور غير صحيحة',
        logoutSuccess: 'تم تسجيل الخروج بنجاح',
        fillRequired: 'يرجى ملء جميع الحقول المطلوبة',
        generateDaysSuccess: 'تم إنشاء أيام الشهر بنجاح',
        calculateSuccess: 'تم حساب ساعات العمل بنجاح',
        saveSuccess: 'تم حفظ السجل بنجاح',
        clearSuccess: 'تم مسح البيانات',
        resetSuccess: 'تم استعادة الإعدادات الافتراضية',
        selectMonthYear: 'يرجى اختيار الشهر والسنة',
        generateDaysFirst: 'يرجى إنشاء أيام الشهر أولاً',
        selectWorkDaysFirst: 'يرجى تحديد أيام العمل أولاً',
        confirmFillOvertime: 'هل أنت متأكد من ملء {hours} ساعات إضافية لجميع الأيام المحددة؟',
        fillOvertimeDone: 'تم ملء {hours} ساعات إضافية لـ {count} يوم محدد',
        statusPresent: 'حاضر',
        statusAbsent: 'غائب',
        statusHoliday: 'إجازة',
        dayNames: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
        dayUnit: 'يوم',
        hourUnit: 'ساعة',
        noResultsToSave: 'لا توجد نتائج للحفظ',
        dateLabel: 'التاريخ',
        totalLabel: 'الإجمالي',
        view: 'عرض',
        delete: 'حذف',
        recordViewed: 'تم عرض السجل',
        confirmDeleteRecord: 'هل أنت متأكد من حذف هذا السجل؟',
        recordDeleted: 'تم حذف السجل',
        noRecordsPeriod: 'لا توجد سجلات في هذه الفترة',
        confirmResetSettings: 'هل أنت متأكد من استعادة الإعدادات الافتراضية؟',
        exportDataSuccess: 'تم تصدير البيانات بنجاح',
        confirmImportData: 'هل أنت متأكد من استيراد هذه البيانات؟ سيتم استبدال البيانات الحالية.',
        importDataSuccess: 'تم استيراد البيانات بنجاح',
        invalidFile: 'ملف غير صالح',
        passwordUpdatedSuccess: 'تم تحديث كلمة المرور بنجاح',
        usernameUpdatedSuccess: 'تم تحديث اسم المستخدم بنجاح',
        passwordMismatch: 'كلمة المرور الجديدة وتأكيدها غير متطابقين',
        invalidCurrentPassword: 'كلمة المرور الحالية غير صحيحة',
        usernameTaken: 'اسم المستخدم مستخدم بالفعل',
        usernameRequired: 'يرجى إدخال اسم مستخدم جديد',
        notLoggedIn: 'يرجى تسجيل الدخول أولاً'
    },
    en: {
        // Navigation
        dashboard: 'Dashboard',
        calculator: 'Calculator',
        records: 'Records',
        settings: 'Settings',
        logout: 'Logout',
        themeDark: 'Dark Mode',
        themeLight: 'Light Mode',
        
        // Calculator
        calculatorTitle: 'Work Hours Calculator',
        calculatorDesc: 'Calculate work hours and overtime for each day',
        employeeName: 'Employee Name',
        monthYear: 'Month and Year',
        dailyHours: 'Daily Work Hours',
        dailyRate: 'Daily Rate',
        overtimeRate: 'Overtime Rate',
        holidays: 'Additional Holidays',
        holidaysPlaceholder: 'Enter holiday dates (e.g., 2024-01-01, 2024-12-25)',
        generateDays: 'Generate Month Days',
        fillOvertime: 'Fill Overtime Hours',
        fillAll: 'Fill All',
        calculate: 'Calculate Now',
        clear: 'Clear Data',
        saveRecord: 'Save Record',
        exportResults: 'Export Results',
        
        // Daily Entries
        dailyEntriesTitle: 'Daily Hours Entry',
        dailyEntriesDesc: 'Confirm attendance and enter overtime hours for each day',
        confirmAttendance: 'Confirm Attendance',
        overtimeHours: 'Overtime Hours',
        
        // Results
        resultsTitle: 'Calculation Results',
        totalDays: 'Total Days',
        regularHours: 'Regular Hours',
        overtimeHours: 'Overtime Hours',
        regularSalary: 'Regular Salary',
        overtimePay: 'Overtime Pay',
        totalSalary: 'Total Due',
        
        // Records
        recordsTitle: 'Calculation Records',
        recordsDesc: 'View and manage previous calculation records',
        searchRecords: 'Search in records...',
        all: 'All',
        thisMonth: 'This Month',
        thisYear: 'This Year',
        noRecords: 'No records available',
        
        // Settings
        settingsTitle: 'Settings',
        settingsDesc: 'Customize system settings',
        generalSettings: 'General Settings',
        companyName: 'Company Name',
        currency: 'Default Currency',
        language: 'Language',
        calculationSettings: 'Calculation Settings',
        defaultDailyHours: 'Default Daily Work Hours',
        dataSettings: 'Data Settings',
        changePassword: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        updatePassword: 'Update Password',
        changeUsername: 'Change Username',
        newUsername: 'New Username',
        updateUsername: 'Update Username',
        saveSettings: 'Save Settings',
        resetSettings: 'Reset Default Settings',
        exportData: 'Export Data',
        importData: 'Import Data',
        
        // Messages
        loginSuccess: 'Login successful',
        loginError: 'Username or password is incorrect',
        logoutSuccess: 'Logout successful',
        fillRequired: 'Please fill all required fields',
        generateDaysSuccess: 'Month days generated successfully',
        calculateSuccess: 'Work hours calculated successfully',
        saveSuccess: 'Record saved successfully',
        clearSuccess: 'Data cleared successfully',
        resetSuccess: 'Default settings restored',
        selectMonthYear: 'Please select month and year',
        generateDaysFirst: 'Please generate month days first',
        selectWorkDaysFirst: 'Please select working days first',
        confirmFillOvertime: 'Are you sure you want to fill {hours} overtime hours for all selected days?',
        fillOvertimeDone: 'Filled {hours} overtime hours for {count} selected days',
        statusPresent: 'Present',
        statusAbsent: 'Absent',
        statusHoliday: 'Holiday',
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayUnit: 'day(s)',
        hourUnit: 'hour(s)',
        noResultsToSave: 'No results to save',
        dateLabel: 'Date',
        totalLabel: 'Total',
        view: 'View',
        delete: 'Delete',
        recordViewed: 'Record opened',
        confirmDeleteRecord: 'Are you sure you want to delete this record?',
        recordDeleted: 'Record deleted',
        noRecordsPeriod: 'No records for this period',
        confirmResetSettings: 'Are you sure you want to restore default settings?',
        exportDataSuccess: 'Data exported successfully',
        confirmImportData: 'Are you sure you want to import this data? Current data will be replaced.',
        importDataSuccess: 'Data imported successfully',
        invalidFile: 'Invalid file',
        passwordUpdatedSuccess: 'Password updated successfully',
        usernameUpdatedSuccess: 'Username updated successfully',
        passwordMismatch: 'New password and confirmation do not match',
        invalidCurrentPassword: 'Current password is incorrect',
        usernameTaken: 'Username is already taken',
        usernameRequired: 'Please enter a new username',
        notLoggedIn: 'Please log in first'
    },
    it: {
        // Navigation
        dashboard: 'Pannello di Controllo',
        calculator: 'Calcolatrice',
        records: 'Registri',
        settings: 'Impostazioni',
        logout: 'Esci',
        themeDark: 'Modalità Scura',
        themeLight: 'Modalità Chiara',
        
        // Calculator
        calculatorTitle: 'Calcolatore Ore di Lavoro',
        calculatorDesc: 'Calcola le ore di lavoro e gli straordinari per ogni giorno',
        employeeName: 'Nome Dipendente',
        monthYear: 'Mese e Anno',
        dailyHours: 'Ore di Lavoro Giornaliere',
        dailyRate: 'Tariffa Giornaliera',
        overtimeRate: 'Tariffa Straordinari',
        holidays: 'Festività Aggiuntive',
        holidaysPlaceholder: 'Inserisci date festività (es., 2024-01-01, 2024-12-25)',
        generateDays: 'Genera Giorni del Mese',
        fillOvertime: 'Riempi Ore Straordinari',
        fillAll: 'Riempi Tutto',
        calculate: 'Calcola Ora',
        clear: 'Cancella Dati',
        saveRecord: 'Salva Registro',
        exportResults: 'Esporta Risultati',
        
        // Daily Entries
        dailyEntriesTitle: 'Inserimento Ore Giornaliere',
        dailyEntriesDesc: 'Conferma presenza e inserisci ore straordinari per ogni giorno',
        confirmAttendance: 'Conferma Presenza',
        overtimeHours: 'Ore Straordinari',
        
        // Results
        resultsTitle: 'Risultati Calcolo',
        totalDays: 'Giorni Totali',
        regularHours: 'Ore Normali',
        overtimeHours: 'Ore Straordinari',
        regularSalary: 'Stipendio Normale',
        overtimePay: 'Pagamento Straordinari',
        totalSalary: 'Totale Dovuto',
        
        // Records
        recordsTitle: 'Registri Calcoli',
        recordsDesc: 'Visualizza e gestisci i registri di calcolo precedenti',
        searchRecords: 'Cerca nei registri...',
        all: 'Tutto',
        thisMonth: 'Questo Mese',
        thisYear: 'Questo Anno',
        noRecords: 'Nessun registro disponibile',
        
        // Settings
        settingsTitle: 'Impostazioni',
        settingsDesc: 'Personalizza impostazioni sistema',
        generalSettings: 'Impostazioni Generali',
        companyName: 'Nome Azienda',
        currency: 'Valuta Predefinita',
        language: 'Lingua',
        calculationSettings: 'Impostazioni Calcolo',
        defaultDailyHours: 'Ore Lavoro Giornaliere Predefinite',
        dataSettings: 'Impostazioni Dati',
        changePassword: 'Cambia Password',
        currentPassword: 'Password Attuale',
        newPassword: 'Nuova Password',
        confirmPassword: 'Conferma Password',
        updatePassword: 'Aggiorna Password',
        changeUsername: 'Cambia Nome Utente',
        newUsername: 'Nuovo Nome Utente',
        updateUsername: 'Aggiorna Nome Utente',
        saveSettings: 'Salva Impostazioni',
        resetSettings: 'Ripristina Impostazioni Predefinite',
        exportData: 'Esporta Dati',
        importData: 'Importa Dati',
        
        // Messages
        loginSuccess: 'Accesso riuscito',
        loginError: 'Nome utente o password errati',
        logoutSuccess: 'Logout riuscito',
        fillRequired: 'Compila tutti i campi richiesti',
        generateDaysSuccess: 'Giorni del mese generati con successo',
        calculateSuccess: 'Ore di lavoro calcolate con successo',
        saveSuccess: 'Registro salvato con successo',
        clearSuccess: 'Dati cancellati con successo',
        resetSuccess: 'Impostazioni predefinite ripristinate',
        selectMonthYear: 'Seleziona mese e anno',
        generateDaysFirst: 'Genera prima i giorni del mese',
        selectWorkDaysFirst: 'Seleziona prima i giorni di lavoro',
        confirmFillOvertime: 'Sei sicuro di voler riempire {hours} ore straordinarie per tutti i giorni selezionati?',
        fillOvertimeDone: 'Inserite {hours} ore straordinarie per {count} giorni selezionati',
        statusPresent: 'Presente',
        statusAbsent: 'Assente',
        statusHoliday: 'Festivo',
        dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        dayUnit: 'giorni',
        hourUnit: 'ore',
        noResultsToSave: 'Nessun risultato da salvare',
        dateLabel: 'Data',
        totalLabel: 'Totale',
        view: 'Apri',
        delete: 'Elimina',
        recordViewed: 'Registro aperto',
        confirmDeleteRecord: 'Sei sicuro di voler eliminare questo registro?',
        recordDeleted: 'Registro eliminato',
        noRecordsPeriod: 'Nessun registro per questo periodo',
        confirmResetSettings: 'Sei sicuro di voler ripristinare le impostazioni predefinite?',
        exportDataSuccess: 'Dati esportati con successo',
        confirmImportData: 'Sei sicuro di voler importare questi dati? I dati attuali saranno sostituiti.',
        importDataSuccess: 'Dati importati con successo',
        invalidFile: 'File non valido',
        passwordUpdatedSuccess: 'Password aggiornata con successo',
        usernameUpdatedSuccess: 'Nome utente aggiornato con successo',
        passwordMismatch: 'La nuova password e la conferma non corrispondono',
        invalidCurrentPassword: 'La password attuale non è corretta',
        usernameTaken: 'Il nome utente è già in uso',
        usernameRequired: 'Inserisci un nuovo nome utente',
        notLoggedIn: 'Effettua prima il login'
    }
};

let appData = {
    settings: {
        companyName: 'Sistema Ore Lavoro',
        currency: 'Euro',
        language: 'it',
        defaultDailyHours: 8,
        weekendDays: [6, 7]
    },
    records: [],
    users: [
        { username: 'admin', password: '1234', role: 'admin' }
    ]
};

function applyTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    updateThemeToggleUI();
}

function initTheme() {
    const savedTheme = safeStorageGet(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
        applyTheme(savedTheme);
        return;
    }

    const prefersDark =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    applyTheme(prefersDark ? 'dark' : 'light');
}

function updateThemeToggleUI() {
    const toggleBtn = document.querySelector('.theme-toggle-btn');
    if (!toggleBtn) return;

    const t = translations[currentLanguage] || translations.it;
    const labelEl = toggleBtn.querySelector('span');
    const iconEl = toggleBtn.querySelector('i');

    if (labelEl) {
        labelEl.textContent = currentTheme === 'dark' ? t.themeLight : t.themeDark;
    }

    if (iconEl) {
        iconEl.classList.remove('fa-moon', 'fa-sun');
        iconEl.classList.add(currentTheme === 'dark' ? 'fa-sun' : 'fa-moon');
    }

    toggleBtn.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');
}

function toggleTheme() {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    safeStorageSet(THEME_STORAGE_KEY, nextTheme, true);
}

document.addEventListener('DOMContentLoaded', function() {
    storageAvailable = isLocalStorageAvailable();
    if (!storageAvailable) {
        showToast(
            currentLanguage === 'ar'
                ? 'التخزين (LocalStorage) غير متاح في هذا المتصفح. لن يتم حفظ البيانات بعد إغلاق الصفحة.'
                : currentLanguage === 'en'
                    ? 'Local storage is not available in this browser. Data will not persist after closing the page.'
                    : 'LocalStorage non disponibile in questo browser. I dati non verranno salvati dopo la chiusura della pagina.',
            'error'
        );
    }

    initTheme();
    loadAppData();

    if (!appData.settings) {
        appData.settings = {
            companyName: 'Sistema Ore Lavoro',
            currency: 'Euro',
            language: 'it',
            defaultDailyHours: 8,
            weekendDays: [6, 7]
        };
        saveAppData();
    }

    if (!appData.settings.language) {
        appData.settings.language = 'it';
        saveAppData();
    }

    migrateSavedDataToCurrentDefaults();

    applySettings();
    checkAuthStatus();
    initializeEventListeners();
});

function isLocalStorageAvailable() {
    try {
        const key = '__work_hours_test__';
        localStorage.setItem(key, '1');
        localStorage.removeItem(key);
        return true;
    } catch (e) {
        console.error('localStorage unavailable:', e);
        return false;
    }
}

function safeStorageGet(key) {
    if (!storageAvailable) return null;
    try {
        return localStorage.getItem(key);
    } catch (e) {
        console.error('localStorage getItem failed:', key, e);
        return null;
    }
}

function safeStorageSet(key, value, silent = false) {
    if (!storageAvailable) {
        if (!silent) {
            showToast(
                currentLanguage === 'ar'
                    ? 'لا يمكن حفظ البيانات لأن التخزين غير متاح في المتصفح.'
                    : currentLanguage === 'en'
                        ? 'Cannot save data because storage is not available in the browser.'
                        : 'Impossibile salvare i dati perché lo storage non è disponibile nel browser.',
                'error'
            );
        }
        return false;
    }
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (e) {
        console.error('localStorage setItem failed:', key, e);
        if (!silent) {
            showToast(
                currentLanguage === 'ar'
                    ? 'تعذر حفظ البيانات على هذا المتصفح. جرّب تعطيل وضع التصفح الخفي أو السماح بالتخزين.'
                    : currentLanguage === 'en'
                        ? 'Unable to save data in this browser. Try disabling private mode or allow storage.'
                        : 'Impossibile salvare i dati in questo browser. Disattiva la navigazione in incognito o consenti l\'archiviazione.',
                'error'
            );
        }
        return false;
    }
}

function safeStorageRemove(key) {
    if (!storageAvailable) return;
    try {
        localStorage.removeItem(key);
    } catch (e) {
        console.error('localStorage removeItem failed:', key, e);
    }
}

function loadAppData() {
    const savedData = safeStorageGet('workHoursAppData');
    if (savedData) {
        try {
            appData = JSON.parse(savedData);
        } catch (e) {
            console.error('Failed to parse saved app data:', e);
            showToast(
                currentLanguage === 'ar'
                    ? 'تعذر قراءة البيانات المحفوظة. قد تكون تالفة. لن يتم حذفها تلقائياً.'
                    : currentLanguage === 'en'
                        ? 'Unable to read saved data. It may be corrupted. It will not be deleted automatically.'
                        : 'Impossibile leggere i dati salvati. Potrebbero essere corrotti. Non verranno eliminati automaticamente.',
                'error'
            );
        }
    }
    applySettings();
}

function migrateSavedDataToCurrentDefaults() {
    if (!appData || !appData.settings) return;

    if (appData.settings.language === 'ar') {
        appData.settings.language = 'it';
    }

    appData.settings.currency = normalizeCurrencyValue(appData.settings.currency, appData.settings.language);

    if (Array.isArray(appData.records)) {
        appData.records = appData.records.map(r => ({
            ...r,
            currency: normalizeCurrencyValue(r.currency, appData.settings.language)
        }));
    }

    saveAppData();
}

function normalizeCurrencyValue(currency, lang) {
    if (!currency) {
        return lang === 'it' ? 'Euro' : lang === 'en' ? 'Euro' : 'يورو';
    }

    const map = {
        it: {
            'يورو': 'Euro',
            'Euro': 'Euro',
            'ريال': 'Riyale Saudita',
            'Saudi Riyal': 'Riyale Saudita',
            'Riyale Saudita': 'Riyale Saudita',
            'درهم': 'Dirham UAE',
            'UAE Dirham': 'Dirham UAE',
            'Dirham UAE': 'Dirham UAE',
            'دينار': 'Dinaro Kuwaitiano',
            'Kuwaiti Dinar': 'Dinaro Kuwaitiano',
            'Dinaro Kuwaitiano': 'Dinaro Kuwaitiano',
            'جنيه': 'Sterlina Egiziana',
            'Egyptian Pound': 'Sterlina Egiziana',
            'Sterlina Egiziana': 'Sterlina Egiziana'
        },
        en: {
            'يورو': 'Euro',
            'Euro': 'Euro',
            'ريال': 'Saudi Riyal',
            'Saudi Riyal': 'Saudi Riyal',
            'Riyale Saudita': 'Saudi Riyal',
            'درهم': 'UAE Dirham',
            'UAE Dirham': 'UAE Dirham',
            'Dirham UAE': 'UAE Dirham',
            'دينار': 'Kuwaiti Dinar',
            'Kuwaiti Dinar': 'Kuwaiti Dinar',
            'Dinaro Kuwaitiano': 'Kuwaiti Dinar',
            'جنيه': 'Egyptian Pound',
            'Egyptian Pound': 'Egyptian Pound',
            'Sterlina Egiziana': 'Egyptian Pound'
        },
        ar: {
            'Euro': 'يورو',
            'يورو': 'يورو',
            'Saudi Riyal': 'ريال',
            'Riyale Saudita': 'ريال',
            'ريال': 'ريال',
            'UAE Dirham': 'درهم',
            'Dirham UAE': 'درهم',
            'درهم': 'درهم',
            'Kuwaiti Dinar': 'دينار',
            'Dinaro Kuwaitiano': 'دينار',
            'دينار': 'دينار',
            'Egyptian Pound': 'جنيه',
            'Sterlina Egiziana': 'جنيه',
            'جنيه': 'جنيه'
        }
    };

    const normalized = (map[lang] && map[lang][currency]) ? map[lang][currency] : currency;
    return normalized;
}

// Save Application Data to LocalStorage
function saveAppData() {
    if (!storageAvailable) {
        showToast(
            currentLanguage === 'ar'
                ? 'لا يمكن حفظ البيانات لأن التخزين غير متاح في المتصفح.'
                : currentLanguage === 'en'
                    ? 'Cannot save data because storage is not available in the browser.'
                    : 'Impossibile salvare i dati perché lo storage non è disponibile nel browser.',
            'error'
        );
        return false;
    }
    try {
        const ok = safeStorageSet('workHoursAppData', JSON.stringify(appData));
        if (!ok) return false;
        const verify = safeStorageGet('workHoursAppData');
        if (!verify) {
            throw new Error('localStorage verification failed');
        }
        return true;
    } catch (e) {
        console.error('Failed to save app data to localStorage:', e);
        showToast(
            currentLanguage === 'ar'
                ? 'تعذر حفظ البيانات على هذا المتصفح. جرّب تعطيل وضع التصفح الخفي أو السماح بالتخزين.'
                : currentLanguage === 'en'
                    ? 'Unable to save data in this browser. Try disabling private mode or allow storage.'
                    : 'Impossibile salvare i dati in questo browser. Disattiva la navigazione in incognito o consenti l\'archiviazione.',
            'error'
        );
        return false;
    }
}

// Apply Settings
function applySettings() {
    const settings = appData.settings;
    document.getElementById('companyName').value = settings.companyName;
    document.getElementById('currency').value = settings.currency;
    document.getElementById('language').value = settings.language;
    document.getElementById('defaultDailyHours').value = settings.defaultDailyHours;
    
    // Set default values in calculator
    document.getElementById('dailyHours').value = settings.defaultDailyHours;
    
    // Apply language
    applyLanguage(settings.language);
}

// Apply Language
function applyLanguage(lang) {
    currentLanguage = lang;
    
    // Update document direction
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = lang;
    }
    
    // Update immediately without timeout
    updateTranslations();
    
    // Also update after a short delay to ensure DOM is ready
    setTimeout(() => {
        updateTranslations();
    }, 50);
}

// Update Translations
function updateTranslations() {
    const t = translations[currentLanguage];
    
    // Force update all elements
    console.log('Updating translations to:', currentLanguage);
    
    // Update settings card headers by ID - this is the key fix!
    const generalSettingsTitle = document.getElementById('generalSettingsTitle');
    if (generalSettingsTitle) {
        generalSettingsTitle.textContent = t.generalSettings;
        generalSettingsTitle.style.color = ''; // Temporary visual indicator
        setTimeout(() => generalSettingsTitle.style.color = '', 1000);
        console.log('Updated general settings title to:', t.generalSettings);
    }
    
    const calculationSettingsTitle = document.getElementById('calculationSettingsTitle');
    if (calculationSettingsTitle) {
        calculationSettingsTitle.textContent = t.calculationSettings;
        calculationSettingsTitle.style.color = ''; // Temporary visual indicator
        setTimeout(() => calculationSettingsTitle.style.color = '', 1000);
        console.log('Updated calculation settings title to:', t.calculationSettings);
    }
    
    const dataSettingsTitle = document.getElementById('dataSettingsTitle');
    if (dataSettingsTitle) {
        dataSettingsTitle.textContent = t.dataSettings;
        dataSettingsTitle.style.color = ''; // Temporary visual indicator
        setTimeout(() => dataSettingsTitle.style.color = '', 1000);
        console.log('Updated data settings title to:', t.dataSettings);
    }
    
    // Also update by querySelector as backup
    const settingsCards = document.querySelectorAll('.settings-card h3');
    console.log('Found settings cards:', settingsCards.length);
    
    settingsCards.forEach((card, index) => {
        console.log('Updating card', index, 'to:', index === 0 ? t.generalSettings : index === 1 ? t.calculationSettings : t.dataSettings);
        if (index === 0 && !card.id) {
            card.textContent = t.generalSettings;
        }
        else if (index === 1 && !card.id) {
            card.textContent = t.calculationSettings;
        }
        else if (index === 2 && !card.id) {
            card.textContent = t.dataSettings;
        }
    });
    
    // Navigation
    const dashboardBtn = document.querySelector('[data-page="dashboard"] span');
    if (dashboardBtn) dashboardBtn.textContent = t.dashboard;
    
    const calculatorBtn = document.querySelector('[data-page="calculator"] span');
    if (calculatorBtn) calculatorBtn.textContent = t.calculator;
    
    const recordsBtn = document.querySelector('[data-page="records"] span');
    if (recordsBtn) recordsBtn.textContent = t.records;
    
    const settingsBtn = document.querySelector('[data-page="settings"] span');
    if (settingsBtn) settingsBtn.textContent = t.settings;
    
    const logoutBtn = document.querySelector('.logout-btn span');
    if (logoutBtn) logoutBtn.textContent = t.logout;

    const registerLink = document.getElementById('registerLink');
    if (registerLink) {
        registerLink.textContent = currentLanguage === 'ar'
            ? 'إنشاء حساب'
            : currentLanguage === 'en'
                ? 'Create account'
                : 'Registrati';
    }

    updateThemeToggleUI();
    
    // Calculator
    const calcTitle = document.querySelector('#calculatorSection h2');
    if (calcTitle) calcTitle.textContent = t.calculatorTitle;
    
    const calcDesc = document.querySelector('#calculatorSection p');
    if (calcDesc) calcDesc.textContent = t.calculatorDesc;
    
    // Update all labels
    document.querySelectorAll('label').forEach(label => {
        const forAttr = label.getAttribute('for');
        if (forAttr === 'employeeName') label.textContent = t.employeeName;
        else if (forAttr === 'monthYear') label.textContent = t.monthYear;
        else if (forAttr === 'dailyHours') label.textContent = t.dailyHours;
        else if (forAttr === 'dailyRate') label.textContent = t.dailyRate;
        else if (forAttr === 'overtimeRate') label.textContent = t.overtimeRate;
        else if (forAttr === 'holidaysList') label.textContent = t.holidays;
        else if (forAttr === 'quickOvertime') label.textContent = t.fillOvertime;
        else if (forAttr === 'currency') label.textContent = t.currency;
        else if (forAttr === 'language') label.textContent = t.language;
        else if (forAttr === 'defaultDailyHours') label.textContent = t.defaultDailyHours;
        else if (forAttr === 'currentPassword') label.textContent = t.changePassword;
    });
    
    // Update all inputs placeholders
    document.getElementById('employeeName').placeholder = t.employeeName;
    document.getElementById('dailyRate').placeholder = t.dailyRate;
    document.getElementById('overtimeRate').placeholder = t.overtimeRate;
    document.getElementById('holidaysList').placeholder = t.holidaysPlaceholder;
    document.getElementById('searchRecords').placeholder = t.searchRecords;
    document.getElementById('companyName').placeholder = t.companyName;
    document.getElementById('currentPassword').placeholder = t.currentPassword;
    document.getElementById('newPassword').placeholder = t.newPassword;
    document.getElementById('confirmPassword').placeholder = t.confirmPassword;
    const newUsernameInput = document.getElementById('newUsername');
    if (newUsernameInput) newUsernameInput.placeholder = t.newUsername;
    
    // Update buttons
    const generateBtn = document.getElementById('generateDaysBtn');
    if (generateBtn) generateBtn.textContent = t.generateDays;
    
    const fillBtn = document.getElementById('fillOvertimeBtn');
    if (fillBtn) fillBtn.textContent = t.fillAll;
    
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) calculateBtn.textContent = t.calculate;
    
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) clearBtn.textContent = t.clear;
    
    const saveBtn = document.getElementById('saveRecordBtn');
    if (saveBtn) saveBtn.textContent = t.saveRecord;
    
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) exportBtn.textContent = t.exportResults;
    
    // Settings section
    const settingsTitle = document.querySelector('#settingsSection h2');
    if (settingsTitle) settingsTitle.textContent = t.settingsTitle;
    
    const settingsDesc = document.querySelector('#settingsSection p');
    if (settingsDesc) settingsDesc.textContent = t.settingsDesc;
    
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) saveSettingsBtn.textContent = t.saveSettings;
    
    const resetSettingsBtn = document.getElementById('resetSettingsBtn');
    if (resetSettingsBtn) resetSettingsBtn.textContent = t.resetSettings;

    const updatePasswordBtn = document.getElementById('updatePasswordBtn');
    if (updatePasswordBtn) updatePasswordBtn.textContent = t.updatePassword;

    const updateUsernameBtn = document.getElementById('updateUsernameBtn');
    if (updateUsernameBtn) updateUsernameBtn.textContent = t.updateUsername;
    
    // Update currency and language options
    updateCurrencyOptions();
    updateLanguageOptions();

    updateDayCardsTranslations();

    const recordsList = document.getElementById('recordsList');
    if (recordsList) {
        loadRecords();
    }
    
    console.log('Translation update completed');
}

function updateDayCardsTranslations() {
    const t = translations[currentLanguage];
    const dayCards = document.querySelectorAll('.day-card');
    if (!dayCards.length) return;

    dayCards.forEach(card => {
        const checkbox = card.querySelector('input[type="checkbox"]');
        if (!checkbox) return;

        const dateString = checkbox.dataset.date;
        if (dateString) {
            const dayOfWeek = new Date(dateString).getDay();
            const dayNameEl = card.querySelector('.day-name');
            if (dayNameEl && Array.isArray(t.dayNames) && t.dayNames[dayOfWeek]) {
                dayNameEl.textContent = t.dayNames[dayOfWeek];
            }
        }

        updateDayStatus(checkbox);

        const attendanceLabel = checkbox.closest('label');
        if (attendanceLabel) {
            const nodes = Array.from(attendanceLabel.childNodes);
            const textNode = nodes.find(n => n.nodeType === Node.TEXT_NODE);
            if (textNode) {
                textNode.textContent = ` ${t.confirmAttendance}`;
            } else {
                attendanceLabel.appendChild(document.createTextNode(` ${t.confirmAttendance}`));
            }
        }

        const overtimeLabel = card.querySelector('.day-input label');
        if (overtimeLabel) {
            overtimeLabel.textContent = t.overtimeHours;
        }
    });
}

// Update Placeholders
function updatePlaceholders() {
    const t = translations[currentLanguage];
    
    // Update all placeholders with proper IDs
    updateElementById('employeeName', '', t.employeeName);
    updateElementById('dailyRate', '', t.dailyRate);
    updateElementById('overtimeRate', '', t.overtimeRate);
    updateElementById('holidaysList', '', t.holidaysPlaceholder);
    updateElementById('quickOvertime', '', '0');
    updateElementById('searchRecords', '', t.searchRecords);
    updateElementById('companyName', '', t.companyName);
    updateElementById('currentPassword', '', t.currentPassword);
    updateElementById('newPassword', '', t.newPassword);
    updateElementById('confirmPassword', '', t.confirmPassword);
}

// Update Currency Options
function updateCurrencyOptions() {
    const currencySelect = document.getElementById('currency');
    if (currencySelect) {
        const currencies = {
            ar: [
                { value: 'ريال', text: 'ريال سعودي' },
                { value: 'درهم', text: 'درهم إماراتي' },
                { value: 'دينار', text: 'دينار كويتي' },
                { value: 'جنيه', text: 'جنيه مصري' },
                { value: 'يورو', text: 'يورو' }
            ],
            en: [
                { value: 'Saudi Riyal', text: 'Saudi Riyal' },
                { value: 'UAE Dirham', text: 'UAE Dirham' },
                { value: 'Kuwaiti Dinar', text: 'Kuwaiti Dinar' },
                { value: 'Egyptian Pound', text: 'Egyptian Pound' },
                { value: 'Euro', text: 'Euro' }
            ],
            it: [
                { value: 'Riyale Saudita', text: 'Riyale Saudita' },
                { value: 'Dirham UAE', text: 'Dirham UAE' },
                { value: 'Dinaro Kuwaitiano', text: 'Dinaro Kuwaitiano' },
                { value: 'Sterlina Egiziana', text: 'Sterlina Egiziana' },
                { value: 'Euro', text: 'Euro' }
            ]
        };
        
        const currentValue = currencySelect.value;
        currencySelect.innerHTML = '';
        
        currencies[currentLanguage].forEach(currency => {
            const option = document.createElement('option');
            option.value = currency.value;
            option.textContent = currency.text;
            if (currency.value === currentValue) {
                option.selected = true;
            }
            currencySelect.appendChild(option);
        });
    }
}

// Update Language Options
function updateLanguageOptions() {
    const languageSelect = document.getElementById('language');
    if (languageSelect) {
        const languages = {
            ar: [
                { value: 'ar', text: 'العربية' },
                { value: 'en', text: 'English' },
                { value: 'it', text: 'Italiano' }
            ],
            en: [
                { value: 'ar', text: 'العربية' },
                { value: 'en', text: 'English' },
                { value: 'it', text: 'Italiano' }
            ],
            it: [
                { value: 'ar', text: 'العربية' },
                { value: 'en', text: 'English' },
                { value: 'it', text: 'Italiano' }
            ]
        };
        
        const currentValue = languageSelect.value;
        languageSelect.innerHTML = '';
        
        languages[currentLanguage].forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.value;
            option.textContent = lang.text;
            if (lang.value === currentValue) {
                option.selected = true;
            }
            languageSelect.appendChild(option);
        });
    }
}

// Update Element Helper
function updateElement(selector, text, placeholder = '', value = '') {
    const element = document.querySelector(selector);
    if (element) {
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (placeholder) element.placeholder = placeholder;
                if (value) element.value = value;
            } else {
                element.textContent = text;
            }
        }
    }
}

// Update All Elements by ID
function updateElementById(id, text, placeholder = '') {
    const element = document.getElementById(id);
    if (element) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (placeholder) element.placeholder = placeholder;
        } else {
            element.textContent = text;
        }
    }
}

// Check Authentication Status
function checkAuthStatus() {
    const savedUser = safeStorageGet('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    } else {
        showLogin();
    }
}

// Initialize Event Listeners
function initializeEventListeners() {
    console.log('Initializing event listeners...');
    
    // Login Form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Login form submitted');
            handleLogin(e);
        });
        console.log('Login form listener added');
    } else {
        console.log('Login form not found');
    }
    
    // Navigation
    const navBtns = document.querySelectorAll('.nav-btn[data-page]');
    console.log('Found navigation buttons:', navBtns.length);
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('Navigation clicked:', this.dataset.page);
            switchPage(this.dataset.page);
        });
    });

    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            toggleTheme();
        });
    }
    
    // Logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            console.log('Logout clicked');
            handleLogout();
        });
        console.log('Logout button listener added');
    } else {
        console.log('Logout button not found');
    }
    
    // Calculator buttons
    const generateDaysBtn = document.getElementById('generateDaysBtn');
    if (generateDaysBtn) {
        generateDaysBtn.addEventListener('click', function() {
            console.log('Generate days clicked');
            generateMonthDays();
        });
        console.log('Generate days button listener added');
    }

    // Auto-save calculator inputs (avoid losing data on refresh)
    const autoSaveCalculator = () => saveCurrentCalculatorData(true);
    const autoSaveInputs = [
        'employeeName',
        'monthYear',
        'dailyHours',
        'dailyRate',
        'overtimeRate',
        'holidaysList',
        'quickOvertime'
    ];
    autoSaveInputs.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', autoSaveCalculator);
        el.addEventListener('change', autoSaveCalculator);
    });

    // Delegate changes inside days grid (checkboxes + overtime inputs)
    const daysGrid = document.getElementById('daysGrid');
    if (daysGrid) {
        daysGrid.addEventListener('change', autoSaveCalculator);
        daysGrid.addEventListener('input', autoSaveCalculator);
    }
    
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            console.log('Calculate clicked');
            calculateWorkHours();
        });
        console.log('Calculate button listener added');
    }
    
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            console.log('Clear clicked');
            clearCalculator();
        });
        console.log('Clear button listener added');
    }
    
    const saveRecordBtn = document.getElementById('saveRecordBtn');
    if (saveRecordBtn) {
        saveRecordBtn.addEventListener('click', function() {
            console.log('Save record clicked');
            saveRecord();
        });
        console.log('Save record button listener added');
    }
    
    const exportBtn = document.getElementById('exportBtn');
    if (exportBtn) {
        exportBtn.addEventListener('click', function() {
            console.log('Export clicked');
            exportResults();
        });
        console.log('Export button listener added');
    }
    
    // Daily Controls
    const fillOvertimeBtn = document.getElementById('fillOvertimeBtn');
    if (fillOvertimeBtn) {
        fillOvertimeBtn.addEventListener('click', function() {
            console.log('Fill overtime clicked');
            fillOvertimeHours();
        });
        console.log('Fill overtime button listener added');
    }
    
    // Settings buttons
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', function() {
            console.log('Save settings clicked');
            saveSettings();
        });
        console.log('Save settings button listener added');
    }
    
    const resetSettingsBtn = document.getElementById('resetSettingsBtn');
    if (resetSettingsBtn) {
        resetSettingsBtn.addEventListener('click', function() {
            console.log('Reset settings clicked');
            resetSettings();
        });
        console.log('Reset settings button listener added');
    }

    const updatePasswordBtn = document.getElementById('updatePasswordBtn');
    if (updatePasswordBtn) {
        updatePasswordBtn.addEventListener('click', function() {
            console.log('Update password clicked');
            updatePassword();
        });
    }

    const updateUsernameBtn = document.getElementById('updateUsernameBtn');
    if (updateUsernameBtn) {
        updateUsernameBtn.addEventListener('click', function() {
            console.log('Update username clicked');
            updateUsername();
        });
    }
    
    // Records
    const searchRecords = document.getElementById('searchRecords');
    if (searchRecords) {
        searchRecords.addEventListener('input', filterRecords);
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            filterByPeriod(this.dataset.filter);
        });
    });

    // Data Export/Import
    const exportDataBtn = document.getElementById('exportDataBtn');
    if (exportDataBtn) {
        exportDataBtn.addEventListener('click', exportAllData);
    }

    const importDataBtn = document.getElementById('importDataBtn');
    if (importDataBtn) {
        importDataBtn.addEventListener('click', importData);
    }
    
    console.log('All event listeners initialized successfully');
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = appData.users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        safeStorageSet('currentUser', JSON.stringify(user));
        showToast(translations[currentLanguage].loginSuccess, 'success');
        showDashboard();
    } else {
        showToast(translations[currentLanguage].loginError, 'error');
    }
}

// Handle Logout
function handleLogout() {
    // Save current calculator data before logout
    saveCurrentCalculatorData(true);
    
    currentUser = null;
    safeStorageRemove('currentUser');
    showLogin();
    showToast(translations[currentLanguage].logoutSuccess, 'info');
}

function updatePassword() {
    const t = translations[currentLanguage];
    if (!currentUser) {
        showToast(t.notLoggedIn, 'error');
        return;
    }

    const currentPasswordEl = document.getElementById('currentPassword');
    const newPasswordEl = document.getElementById('newPassword');
    const confirmPasswordEl = document.getElementById('confirmPassword');

    if (!currentPasswordEl || !newPasswordEl || !confirmPasswordEl) return;

    const currentPassword = currentPasswordEl.value;
    const newPassword = newPasswordEl.value;
    const confirmPassword = confirmPasswordEl.value;

    if (currentPassword !== currentUser.password) {
        showToast(t.invalidCurrentPassword, 'error');
        return;
    }

    if (!newPassword || newPassword !== confirmPassword) {
        showToast(t.passwordMismatch, 'error');
        return;
    }

    const userInList = appData.users.find(u => u.username === currentUser.username);
    if (userInList) {
        userInList.password = newPassword;
    }
    currentUser.password = newPassword;
    safeStorageSet('currentUser', JSON.stringify(currentUser), true);

    const saved = saveAppData();
    if (!saved) return;

    currentPasswordEl.value = '';
    newPasswordEl.value = '';
    confirmPasswordEl.value = '';
    showToast(t.passwordUpdatedSuccess, 'success');
}

function updateUsername() {
    const t = translations[currentLanguage];
    if (!currentUser) {
        showToast(t.notLoggedIn, 'error');
        return;
    }

    const newUsernameEl = document.getElementById('newUsername');
    if (!newUsernameEl) return;

    const nextUsername = newUsernameEl.value.trim();
    if (!nextUsername) {
        showToast(t.usernameRequired, 'error');
        return;
    }

    const taken = appData.users.some(u => u.username === nextUsername && u.username !== currentUser.username);
    if (taken) {
        showToast(t.usernameTaken, 'error');
        return;
    }

    const prevUsername = currentUser.username;
    const userInList = appData.users.find(u => u.username === prevUsername);
    if (userInList) {
        userInList.username = nextUsername;
    }
    currentUser.username = nextUsername;
    safeStorageSet('currentUser', JSON.stringify(currentUser), true);

    if (Array.isArray(appData.records)) {
        appData.records = appData.records.map(r => {
            if (r && r.createdBy === prevUsername) {
                return { ...r, createdBy: nextUsername };
            }
            return r;
        });
    }

    const saved = saveAppData();
    if (!saved) return;

    newUsernameEl.value = '';
    showToast(t.usernameUpdatedSuccess, 'success');
}

// Save current calculator data
function saveCurrentCalculatorData(silent = false) {
    if (!storageAvailable) return;
    const calculatorData = {
        employeeName: document.getElementById('employeeName').value,
        monthYear: document.getElementById('monthYear').value,
        dailyHours: document.getElementById('dailyHours').value,
        dailyRate: document.getElementById('dailyRate').value,
        overtimeRate: document.getElementById('overtimeRate').value,
        holidaysList: document.getElementById('holidaysList').value,
        quickOvertime: document.getElementById('quickOvertime').value,
        daysData: []
    };
    
    // Save daily entries data
    document.querySelectorAll('.day-card').forEach(dayCard => {
        const checkbox = dayCard.querySelector('input[type="checkbox"]');
        const overtimeInput = dayCard.querySelector('input[id^="overtime-"]');
        
        calculatorData.daysData.push({
            day: checkbox.dataset.day,
            date: checkbox.dataset.date,
            isConfirmed: checkbox.checked,
            overtimeHours: overtimeInput.value
        });
    });

    safeStorageSet('currentCalculatorData', JSON.stringify(calculatorData), silent);
}

// Load saved calculator data
function loadSavedCalculatorData() {
    const savedData = safeStorageGet('currentCalculatorData');
    if (savedData) {
        let calculatorData;
        try {
            calculatorData = JSON.parse(savedData);
        } catch (e) {
            console.error('Failed to parse currentCalculatorData:', e);
            return;
        }
        
        // Restore form fields
        document.getElementById('employeeName').value = calculatorData.employeeName || '';
        document.getElementById('monthYear').value = calculatorData.monthYear || '';
        document.getElementById('dailyHours').value = calculatorData.dailyHours || '';
        document.getElementById('dailyRate').value = calculatorData.dailyRate || '';
        document.getElementById('overtimeRate').value = calculatorData.overtimeRate || '';
        document.getElementById('holidaysList').value = calculatorData.holidaysList || '';
        document.getElementById('quickOvertime').value = calculatorData.quickOvertime || '';
        
        // If there's month data, regenerate days
        if (calculatorData.monthYear && calculatorData.daysData.length > 0) {
            generateMonthDays();
            
            // Restore daily data after a short delay
            setTimeout(() => {
                calculatorData.daysData.forEach(dayData => {
                    const checkbox = document.getElementById(`day-${dayData.day}`);
                    const overtimeInput = document.getElementById(`overtime-${dayData.day}`);
                    
                    if (checkbox) {
                        checkbox.checked = dayData.isConfirmed;
                        updateDayStatus(checkbox);
                    }
                    
                    if (overtimeInput) {
                        overtimeInput.value = dayData.overtimeHours;
                    }
                });
            }, 100);
        }
    }
}

// Auto-save before page unload
window.addEventListener('beforeunload', function() {
    saveCurrentCalculatorData(true);
});

// Show Login Page
function showLogin() {
    document.getElementById('loginPage').classList.add('active');
    document.getElementById('dashboardPage').classList.remove('active');
    document.getElementById('loginForm').reset();
}

// Show Dashboard
function showDashboard() {
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('dashboardPage').classList.add('active');
    loadRecords();
    loadSavedCalculatorData();
}

// Switch Between Pages
function switchPage(pageName) {
    // Update navigation buttons
    document.querySelectorAll('.nav-btn[data-page]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
    
    // Update content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${pageName}Section`).classList.add('active');
    
    // Load specific page data
    if (pageName === 'records') {
        loadRecords();
    }
}

// Generate Month Days
function generateMonthDays() {
    const t = translations[currentLanguage];
    const monthYear = document.getElementById('monthYear').value;
    if (!monthYear) {
        showToast(t.selectMonthYear, 'error');
        return;
    }
    
    const [year, month] = monthYear.split('-').map(Number);
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    
    const weekendDays = [6, 7]; // Friday, Saturday
    
    const holidaysList = document.getElementById('holidaysList').value
        .split(',')
        .map(date => date.trim())
        .filter(date => date);
    
    const daysGrid = document.getElementById('daysGrid');
    daysGrid.innerHTML = '';

    const dayNames = t.dayNames;
    
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month - 1, day);
        const dayOfWeek = currentDate.getDay();
        const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        const isWeekend = false;
        const isHoliday = holidaysList.includes(dateString);
        
        const dayCard = document.createElement('div');
        dayCard.className = 'day-card';
        if (isHoliday) dayCard.classList.add('holiday');
        
        let statusClass = 'status-absent';
        let statusText = t.statusAbsent;
        
        if (isHoliday) {
            statusClass = 'status-holiday';
            statusText = t.statusHoliday;
        }
        
        dayCard.innerHTML = `
            <div class="day-header">
                <span class="day-date">${day}</span>
                <span class="day-name">${dayNames[dayOfWeek]}</span>
            </div>
            <div class="day-checkbox">
                <label>
                    <input type="checkbox" id="day-${day}" data-day="${day}" data-date="${dateString}">
                    ${t.confirmAttendance}
                </label>
            </div>
            <div class="day-input">
                <label>${t.overtimeHours}</label>
                <input type="number" id="overtime-${day}" min="0" max="12" step="0.5" placeholder="0">
            </div>
            <div class="day-status ${statusClass}">${statusText}</div>
        `;
        
        daysGrid.appendChild(dayCard);
    }
    
    // Show daily entries section
    document.getElementById('dailyEntriesSection').classList.remove('hidden');
    
    // Scroll to daily entries
    document.getElementById('dailyEntriesSection').scrollIntoView({ behavior: 'smooth' });
    
    showToast(t.generateDaysSuccess, 'success');
}

// Fill Overtime Hours
function fillOvertimeHours() {
    const t = translations[currentLanguage];
    const hours = parseFloat(document.getElementById('quickOvertime').value) || 0;
    
    // Check if days are generated
    const daysGrid = document.getElementById('daysGrid');
    if (daysGrid.children.length === 0) {
        showToast(t.generateDaysFirst, 'error');
        return;
    }
    
    // Ask for confirmation before filling
    if (!confirm(t.confirmFillOvertime.replace('{hours}', String(hours)))) {
        return;
    }
    
    // Fill only for confirmed (checked) days
    const confirmedInputs = document.querySelectorAll('.day-card.confirmed input[id^="overtime-"]');
    
    if (confirmedInputs.length === 0) {
        showToast(t.selectWorkDaysFirst, 'error');
        return;
    }
    
    confirmedInputs.forEach(input => {
        input.value = hours;
    });
    
    showToast(
        t.fillOvertimeDone
            .replace('{hours}', String(hours))
            .replace('{count}', String(confirmedInputs.length)),
        'info'
    );
}

// Update Day Status
function updateDayStatus(checkbox) {
    const t = translations[currentLanguage];
    const dayCard = checkbox.closest('.day-card');
    const statusElement = dayCard.querySelector('.day-status');
    
    if (checkbox.checked) {
        dayCard.classList.add('confirmed');
        if (dayCard.classList.contains('holiday')) {
            statusElement.className = 'day-status status-holiday';
            statusElement.textContent = t.statusHoliday;
        } else {
            statusElement.className = 'day-status status-present';
            statusElement.textContent = t.statusPresent;
        }
    } else {
        dayCard.classList.remove('confirmed');
        if (dayCard.classList.contains('holiday')) {
            statusElement.className = 'day-status status-holiday';
            statusElement.textContent = t.statusHoliday;
        } else {
            statusElement.className = 'day-status status-absent';
            statusElement.textContent = t.statusAbsent;
        }
    }
}

// Calculate Work Hours
function calculateWorkHours() {
    const t = translations[currentLanguage];
    const employeeName = document.getElementById('employeeName').value;
    const monthYear = document.getElementById('monthYear').value;
    const dailyHours = parseFloat(document.getElementById('dailyHours').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const overtimeRate = parseFloat(document.getElementById('overtimeRate').value);
    
    // Validation
    if (!employeeName || !monthYear || isNaN(dailyRate) || isNaN(overtimeRate)) {
        showToast(t.fillRequired, 'error');
        return;
    }
    
    // Check if days are generated
    const daysGrid = document.getElementById('daysGrid');
    if (daysGrid.children.length === 0) {
        showToast(t.generateDaysFirst, 'error');
        return;
    }
    
    // Collect daily data
    const dailyData = [];
    let totalWorkingDays = 0;
    let totalRegularHours = 0;
    let totalOvertimeHours = 0;
    
    document.querySelectorAll('.day-card').forEach(dayCard => {
        const checkbox = dayCard.querySelector('input[type="checkbox"]');
        const overtimeInput = dayCard.querySelector('input[id^="overtime-"]');
        const day = parseInt(checkbox.dataset.day);
        const date = checkbox.dataset.date;
        
        const isConfirmed = checkbox.checked;
        const overtimeHours = parseFloat(overtimeInput.value) || 0;
        
        if (isConfirmed) {
            totalWorkingDays++;
            totalRegularHours += dailyHours;
            totalOvertimeHours += overtimeHours;
        }
        
        dailyData.push({
            day,
            date,
            isConfirmed,
            overtimeHours,
            regularHours: isConfirmed ? dailyHours : 0
        });
    });
    
    // Calculate salaries
    const regularSalary = totalWorkingDays * dailyRate;
    const overtimePay = totalOvertimeHours * overtimeRate;
    const totalSalary = regularSalary + overtimePay;
    
    // Display results
    displayResults({
        employeeName,
        monthYear,
        totalDays: dailyData.length,
        workingDays: totalWorkingDays,
        regularHours: totalRegularHours,
        overtimeHours: totalOvertimeHours,
        regularSalary,
        overtimePay,
        totalSalary,
        currency: appData.settings.currency,
        dailyData
    });
    
    showToast(t.calculateSuccess, 'success');
}

// Display Results
function displayResults(results) {
    const t = translations[currentLanguage];
    document.getElementById('totalDays').textContent = `${results.totalDays} ${t.dayUnit}`;
    document.getElementById('regularHours').textContent = `${results.regularHours} ${t.hourUnit}`;
    document.getElementById('overtimeHours').textContent = `${results.overtimeHours} ${t.hourUnit}`;
    document.getElementById('regularSalary').textContent = `${results.regularSalary} ${results.currency}`;
    document.getElementById('overtimePay').textContent = `${results.overtimePay} ${results.currency}`;
    document.getElementById('totalSalary').textContent = `${results.totalSalary} ${results.currency}`;
    
    // Store results for saving
    window.currentResults = results;
    
    // Show results section
    document.getElementById('resultsSection').classList.remove('hidden');
    
    // Smooth scroll to results
    document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
}

// Clear Calculator
function clearCalculator() {
    document.getElementById('employeeName').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('overtimeRate').value = '';
    document.getElementById('holidaysList').value = '';
    document.getElementById('dailyEntriesSection').classList.add('hidden');
    document.getElementById('resultsSection').classList.add('hidden');
    document.getElementById('quickOvertime').value = '';
    
    // Clear saved calculator data
    safeStorageRemove('currentCalculatorData');
    
    // Reset to defaults
    const settings = appData.settings;
    document.getElementById('dailyHours').value = settings.defaultDailyHours;
    
    showToast(translations[currentLanguage].clearSuccess, 'info');
}

// Save Record
function saveRecord() {
    const t = translations[currentLanguage];
    if (!window.currentResults) {
        showToast(t.noResultsToSave, 'error');
        return;
    }
    
    const record = {
        id: Date.now(),
        ...window.currentResults,
        createdAt: new Date().toISOString(),
        createdBy: (currentUser && currentUser.username) ? currentUser.username : 'unknown'
    };
    
    appData.records.unshift(record);
    const saved = saveAppData();
    if (!saved) return;

    showToast(t.saveSuccess, 'success');
    loadRecords();
}

// Load Records
function loadRecords() {
    const recordsList = document.getElementById('recordsList');
    const records = appData.records;
    const t = translations[currentLanguage];
    const locale = currentLanguage === 'ar' ? 'ar-SA' : currentLanguage === 'en' ? 'en-US' : 'it-IT';
    
    if (records.length === 0) {
        recordsList.innerHTML = `<div class="no-records">${t.noRecords}</div>`;
        return;
    }
    
    recordsList.innerHTML = records.map(record => `
        <div class="record-item" data-id="${record.id}">
            <div class="record-info">
                <h4>${record.employeeName}</h4>
                <p>${t.dateLabel}: ${new Date(record.createdAt).toLocaleDateString(locale)}</p>
                <p>${t.totalLabel}: ${record.totalSalary} ${record.currency}</p>
            </div>
            <div class="record-actions">
                <button onclick="viewRecord(${record.id})">
                    <i class="fas fa-eye"></i> ${t.view}
                </button>
                <button onclick="deleteRecord(${record.id})">
                    <i class="fas fa-trash"></i> ${t.delete}
                </button>
            </div>
        </div>
    `).join('');
}

// View Record
function viewRecord(id) {
    const record = appData.records.find(r => r.id === id);
    if (!record) return;
    
    // Display record details in calculator
    document.getElementById('employeeName').value = record.employeeName;
    displayResults(record);
    
    // Switch to calculator page
    switchPage('calculator');

    showToast(translations[currentLanguage].recordViewed, 'info');
}

// Delete Record
function deleteRecord(id) {
    const t = translations[currentLanguage];
    if (!confirm(t.confirmDeleteRecord)) return;
    
    appData.records = appData.records.filter(r => r.id !== id);
    const saved = saveAppData();
    if (!saved) return;
    loadRecords();

    showToast(t.recordDeleted, 'info');
}

// Filter Records
function filterRecords() {
    const searchTerm = document.getElementById('searchRecords').value.toLowerCase();
    const records = document.querySelectorAll('.record-item');
    
    records.forEach(record => {
        const text = record.textContent.toLowerCase();
        record.style.display = text.includes(searchTerm) ? 'flex' : 'none';
    });
}

// Filter by Period
function filterByPeriod(period) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${period}"]`).classList.add('active');
    
    const now = new Date();
    let filteredRecords = appData.records;
    
    switch(period) {
        case 'month':
            filteredRecords = appData.records.filter(record => {
                const recordDate = new Date(record.createdAt);
                return recordDate.getMonth() === now.getMonth() && 
                       recordDate.getFullYear() === now.getFullYear();
            });
            break;
        case 'year':
            filteredRecords = appData.records.filter(record => {
                const recordDate = new Date(record.createdAt);
                return recordDate.getFullYear() === now.getFullYear();
            });
            break;
    }
    
    // Update display
    const recordsList = document.getElementById('recordsList');
    if (filteredRecords.length === 0) {
        recordsList.innerHTML = `<div class="no-records">${translations[currentLanguage].noRecordsPeriod}</div>`;
        return;
    }

    const t = translations[currentLanguage];
    const locale = currentLanguage === 'ar' ? 'ar-SA' : currentLanguage === 'en' ? 'en-US' : 'it-IT';
    recordsList.innerHTML = filteredRecords.map(record => `
        <div class="record-item" data-id="${record.id}">
            <div class="record-info">
                <h4>${record.employeeName}</h4>
                <p>${t.dateLabel}: ${new Date(record.createdAt).toLocaleDateString(locale)}</p>
                <p>${t.totalLabel}: ${record.totalSalary} ${record.currency}</p>
            </div>
            <div class="record-actions">
                <button onclick="viewRecord(${record.id})">
                    <i class="fas fa-eye"></i> ${t.view}
                </button>
                <button onclick="deleteRecord(${record.id})">
                    <i class="fas fa-trash"></i> ${t.delete}
                </button>
            </div>
        </div>
    `).join('');
}

// Export Results as PDF
function exportResults() {
    if (!window.currentResults) {
        showToast(translations[currentLanguage].noResultsToSave, 'error');
        return;
    }
    
    const results = window.currentResults;
    const t = translations[currentLanguage];

    const useDirectPdfDownload = false;
    if (!useDirectPdfDownload) {
        exportResultsWithPrintWindow(results);
        return;
    }

    const fileName = `report_${results.employeeName || 'employee'}_${results.monthYear || ''}.pdf`
        .replace(/\s+/g, '_')
        .replace(/[^a-zA-Z0-9_\-.]/g, '');

    console.log('PDF export - html2pdf available:', !!window.html2pdf);

    if (window.html2pdf) {
        const container = document.createElement('div');
        container.style.position = 'fixed';
        container.style.left = '0';
        container.style.top = '0';
        container.style.transform = 'translateX(-200vw)';
        container.style.pointerEvents = 'none';
        container.style.width = '794px';
        container.style.background = '#fff';
        container.style.color = '#000';
        container.style.padding = '20px';
        container.style.direction = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        container.style.fontFamily = currentLanguage === 'ar' ? "Tajawal, sans-serif" : "Arial, sans-serif";

        const dailyDetails = results.dailyData.map(day => `
            <tr>
                <td>${day.day}</td>
                <td>${day.date}</td>
                <td>${day.isConfirmed ? t.statusPresent : t.statusAbsent}</td>
                <td>${day.regularHours}</td>
                <td>${day.overtimeHours}</td>
            </tr>
        `).join('');

        container.innerHTML = `
            <div style="text-align:center;border-bottom:2px solid #333;padding-bottom:15px;margin-bottom:20px;">
                <h2 style="margin:0;">${currentLanguage === 'ar' ? 'تقرير حساب ساعات العمل' : currentLanguage === 'en' ? 'Work Hours Report' : 'Report Ore Lavoro'}</h2>
                <div style="margin-top:6px;">${appData.settings.companyName}</div>
                <div style="margin-top:6px;">${currentLanguage === 'ar' ? 'الشهر:' : currentLanguage === 'en' ? 'Month:' : 'Mese:'} ${results.monthYear}</div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:15px;">
                <div style="border:1px solid #ddd;padding:10px;border-radius:6px;">
                    <strong>${currentLanguage === 'ar' ? 'اسم الموظف:' : currentLanguage === 'en' ? 'Employee Name:' : 'Nome Dipendente:'}</strong>
                    <div>${results.employeeName}</div>
                </div>
                <div style="border:1px solid #ddd;padding:10px;border-radius:6px;">
                    <strong>${currentLanguage === 'ar' ? 'العملة:' : currentLanguage === 'en' ? 'Currency:' : 'Valuta:'}</strong>
                    <div>${results.currency}</div>
                </div>
            </div>

            <table style="width:100%;border-collapse:collapse;">
                <thead>
                    <tr>
                        <th style="border:1px solid #ddd;background:#667eea;color:#fff;padding:8px;">${currentLanguage === 'ar' ? 'اليوم' : currentLanguage === 'en' ? 'Day' : 'Giorno'}</th>
                        <th style="border:1px solid #ddd;background:#667eea;color:#fff;padding:8px;">${t.dateLabel}</th>
                        <th style="border:1px solid #ddd;background:#667eea;color:#fff;padding:8px;">${currentLanguage === 'ar' ? 'الحالة' : currentLanguage === 'en' ? 'Status' : 'Stato'}</th>
                        <th style="border:1px solid #ddd;background:#667eea;color:#fff;padding:8px;">${currentLanguage === 'ar' ? 'ساعات عادية' : currentLanguage === 'en' ? 'Regular Hours' : 'Ore Normali'}</th>
                        <th style="border:1px solid #ddd;background:#667eea;color:#fff;padding:8px;">${currentLanguage === 'ar' ? 'ساعات إضافية' : currentLanguage === 'en' ? 'Overtime Hours' : 'Ore Straordinari'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${dailyDetails}
                </tbody>
            </table>

            <div style="margin-top:18px;border:1px solid #ddd;padding:12px;border-radius:8px;background:#f7f7f7;">
                <div><strong>${t.totalDays}:</strong> ${results.totalDays} ${t.dayUnit}</div>
                <div><strong>${t.regularHours}:</strong> ${results.regularHours} ${t.hourUnit}</div>
                <div><strong>${t.overtimeHours}:</strong> ${results.overtimeHours} ${t.hourUnit}</div>
                <div style="margin-top:8px;"><strong>${t.totalSalary}:</strong> ${results.totalSalary} ${results.currency}</div>
            </div>
        `;

        document.body.appendChild(container);

        const waitForRender = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        const waitForFonts = () => {
            try {
                if (document.fonts && document.fonts.ready) {
                    return document.fonts.ready.catch(() => undefined);
                }
            } catch (e) {
                console.warn('document.fonts.ready not available:', e);
            }
            return Promise.resolve();
        };

        const options = {
            margin: 10,
            filename: fileName || 'report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        showToast(currentLanguage === 'ar' ? 'جاري إنشاء ملف PDF...' : currentLanguage === 'en' ? 'Generating PDF...' : 'Creazione PDF in corso...', 'info');

        try {
            Promise.all([waitForFonts(), waitForRender()]).then(() => {
                return window.html2pdf().set(options).from(container).save();
            })
            .then(() => {
                container.remove();
            })
            .catch((err) => {
                container.remove();
                console.error('html2pdf error:', err);
                showToast(currentLanguage === 'ar' ? 'فشل إنشاء PDF، سيتم استخدام نافذة الطباعة' : currentLanguage === 'en' ? 'PDF failed, using print window' : 'PDF non riuscito, uso finestra di stampa', 'error');
                exportResultsWithPrintWindow(results);
            });
        } catch (err) {
            container.remove();
            console.error('html2pdf exception:', err);
            showToast(currentLanguage === 'ar' ? 'فشل إنشاء PDF، سيتم استخدام نافذة الطباعة' : currentLanguage === 'en' ? 'PDF failed, using print window' : 'PDF non riuscito, uso finestra di stampa', 'error');
            exportResultsWithPrintWindow(results);
        }
        return;
    }

    showToast(
        currentLanguage === 'ar'
            ? 'لم يتم تحميل مكتبة PDF. سيتم استخدام نافذة الطباعة.'
            : currentLanguage === 'en'
                ? 'PDF library not loaded. Using print dialog.'
                : 'Libreria PDF non caricata. Uso finestra di stampa.',
        'info'
    );
    exportResultsWithPrintWindow(results);
}

function exportResultsWithPrintWindow(results) {
    const t = translations[currentLanguage];
    
    showToast(
        currentLanguage === 'ar'
            ? 'سيتم فتح نافذة الطباعة. اختر "حفظ كـ PDF" من خيارات الطباعة.'
            : currentLanguage === 'en'
                ? 'Print dialog will open. Choose "Save as PDF".'
                : 'Si aprirà la finestra di stampa. Scegli "Salva come PDF".',
        'info'
    );
    
    const dailyDetails = results.dailyData.map(day => `
        <tr>
            <td>${day.day}</td>
            <td>${day.date}</td>
            <td>${day.isConfirmed ? (currentLanguage === 'ar' ? 'حاضر' : currentLanguage === 'en' ? 'Present' : 'Presente') : (currentLanguage === 'ar' ? 'غائب' : currentLanguage === 'en' ? 'Absent' : 'Assente')}</td>
            <td>${day.regularHours}</td>
            <td>${day.overtimeHours}</td>
        </tr>
    `).join('');

    const reportUser = (currentUser && currentUser.username) ? currentUser.username : '';

    const reportCss = `
        #printReport {
            font-family: ${currentLanguage === 'ar' ? "'Tajawal', sans-serif" : "'Arial', sans-serif"};
            padding: 20px;
            direction: ${currentLanguage === 'ar' ? 'rtl' : 'ltr'};
            color: #000;
            background: #fff;
        }
        #printReport .header {
            text-align: center;
            border-bottom: 2px solid #333;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        #printReport .header h1 {
            color: #333;
            margin-bottom: 10px;
        }
        #printReport .info-section {
            margin-bottom: 30px;
        }
        #printReport .info-section h3 {
            color: #667eea;
            border-bottom: 1px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 15px;
        }
        #printReport .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        #printReport .info-item {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        #printReport .info-item strong {
            color: #333;
            display: block;
            margin-bottom: 5px;
        }
        #printReport .daily-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background: white;
        }
        #printReport .daily-table th,
        #printReport .daily-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        #printReport .daily-table th {
            background: #667eea;
            color: white;
        }
        #printReport .daily-table tr:nth-child(even) {
            background: #f9f9f9;
        }
        #printReport .results-summary {
            background: #f5f5f5;
            padding: 20px;
            border-radius: 10px;
            margin-top: 30px;
        }
        #printReport .total-row {
            background: #667eea;
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin-top: 15px;
        }
        #printReport .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
        }
        @media print {
            #printReport { padding: 10px; }
        }
    `;

    const reportHtml = `
        <div class="header">
            <h1>${currentLanguage === 'ar' ? 'تقرير حساب ساعات العمل' : currentLanguage === 'en' ? 'Work Hours Report' : 'Report Ore Lavoro'}</h1>
            <p>${appData.settings.companyName}</p>
            <p>${currentLanguage === 'ar' ? 'الشهر:' : currentLanguage === 'en' ? 'Month:' : 'Mese:'} ${results.monthYear}</p>
            <p>${currentLanguage === 'ar' ? 'التاريخ:' : currentLanguage === 'en' ? 'Date:' : 'Data:'} ${new Date().toLocaleDateString(currentLanguage === 'ar' ? 'ar-SA' : currentLanguage === 'en' ? 'en-US' : 'it-IT')}</p>
        </div>

        <div class="info-section">
            <h3>${currentLanguage === 'ar' ? 'معلومات الموظف' : currentLanguage === 'en' ? 'Employee Information' : 'Informazioni Dipendente'}</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'اسم الموظف:' : currentLanguage === 'en' ? 'Employee Name:' : 'Nome Dipendente:'}</strong>
                    ${results.employeeName}
                </div>
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'إجمالي أيام الشهر:' : currentLanguage === 'en' ? 'Total Days in Month:' : 'Giorni Totali del Mese:'}</strong>
                    ${results.totalDays} ${currentLanguage === 'ar' ? 'يوم' : currentLanguage === 'en' ? 'days' : 'giorni'}
                </div>
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'أيام العمل الفعلية:' : currentLanguage === 'en' ? 'Actual Working Days:' : 'Giorni Lavorativi Effettivi:'}</strong>
                    ${results.workingDays} ${currentLanguage === 'ar' ? 'يوم' : currentLanguage === 'en' ? 'days' : 'giorni'}
                </div>
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'العملة:' : currentLanguage === 'en' ? 'Currency:' : 'Valuta:'}</strong>
                    ${results.currency}
                </div>
            </div>
        </div>

        <div class="info-section">
            <h3>${currentLanguage === 'ar' ? 'تفاصيل الساعات' : currentLanguage === 'en' ? 'Hours Details' : 'Dettagli Ore'}</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'الساعات العادية:' : currentLanguage === 'en' ? 'Regular Hours:' : 'Ore Normali:'}</strong>
                    ${results.regularHours} ${currentLanguage === 'ar' ? 'ساعة' : currentLanguage === 'en' ? 'hours' : 'ore'}
                </div>
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'الساعات الإضافية:' : currentLanguage === 'en' ? 'Overtime Hours:' : 'Ore Straordinari:'}</strong>
                    ${results.overtimeHours} ${currentLanguage === 'ar' ? 'ساعة' : currentLanguage === 'en' ? 'hours' : 'ore'}
                </div>
            </div>
        </div>

        <div class="info-section">
            <h3>${currentLanguage === 'ar' ? 'تفاصيل اليومية' : currentLanguage === 'en' ? 'Daily Details' : 'Dettagli Giornalieri'}</h3>
            <table class="daily-table">
                <thead>
                    <tr>
                        <th>${currentLanguage === 'ar' ? 'اليوم' : currentLanguage === 'en' ? 'Day' : 'Giorno'}</th>
                        <th>${currentLanguage === 'ar' ? 'التاريخ' : currentLanguage === 'en' ? 'Date' : 'Data'}</th>
                        <th>${currentLanguage === 'ar' ? 'الحالة' : currentLanguage === 'en' ? 'Status' : 'Stato'}</th>
                        <th>${currentLanguage === 'ar' ? 'ساعات عادية' : currentLanguage === 'en' ? 'Regular Hours' : 'Ore Normali'}</th>
                        <th>${currentLanguage === 'ar' ? 'ساعات إضافية' : currentLanguage === 'en' ? 'Overtime Hours' : 'Ore Straordinari'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${dailyDetails}
                </tbody>
            </table>
        </div>

        <div class="info-section">
            <h3>${currentLanguage === 'ar' ? 'التفاصيل المالية' : currentLanguage === 'en' ? 'Financial Details' : 'Dettagli Finanziari'}</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'الراتب العادي:' : currentLanguage === 'en' ? 'Regular Salary:' : 'Stipendio Normale:'}</strong>
                    ${results.regularSalary} ${results.currency}
                </div>
                <div class="info-item">
                    <strong>${currentLanguage === 'ar' ? 'مكافأة الساعات الإضافية:' : currentLanguage === 'en' ? 'Overtime Bonus:' : 'Bonus Straordinari:'}</strong>
                    ${results.overtimePay} ${results.currency}
                </div>
            </div>
        </div>

        <div class="total-row">
            ${currentLanguage === 'ar' ? 'الإجمالي المستحق:' : currentLanguage === 'en' ? 'Total Due:' : 'Totale Dovuto:'} ${results.totalSalary} ${results.currency}
        </div>

        <div class="footer">
            <p>${currentLanguage === 'ar' ? 'تم إنشاء هذا التقرير بواسطة نظام حساب ساعات العمل' : currentLanguage === 'en' ? 'This report was generated by Work Hours System' : 'Questo report è stato generato dal Sistema Ore Lavoro'}</p>
            ${reportUser ? `<p>${currentLanguage === 'ar' ? 'المستخدم:' : currentLanguage === 'en' ? 'User:' : 'Utente:'} ${reportUser}</p>` : ''}
        </div>
    `;

    const existingReport = document.getElementById('printReport');
    if (existingReport) existingReport.remove();

    const existingStyle = document.getElementById('printReportStyle');
    if (existingStyle) existingStyle.remove();

    const existingContentStyle = document.getElementById('printReportContentStyle');
    if (existingContentStyle) existingContentStyle.remove();

    const reportContainer = document.createElement('div');
    reportContainer.id = 'printReport';
    reportContainer.innerHTML = reportHtml;

    const contentStyle = document.createElement('style');
    contentStyle.id = 'printReportContentStyle';
    contentStyle.textContent = reportCss;

    const printStyle = document.createElement('style');
    printStyle.id = 'printReportStyle';
    printStyle.textContent = `
        @media print {
            body > *:not(#printReport) { display: none !important; }
            #printReport { display: block !important; }
            #printReport iframe { display: none !important; }
        }
    `;

    document.head.appendChild(contentStyle);
    document.head.appendChild(printStyle);
    document.body.appendChild(reportContainer);

    const cleanup = () => {
        const r = document.getElementById('printReport');
        if (r) r.remove();
        const s = document.getElementById('printReportStyle');
        if (s) s.remove();
        const cs = document.getElementById('printReportContentStyle');
        if (cs) cs.remove();
    };

    window.addEventListener('afterprint', cleanup, { once: true });

    try {
        window.focus();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    window.print();
                }, 50);
            });
        });
    } catch (e) {
        console.error('window.print error:', e);
        cleanup();
        showToast(currentLanguage === 'ar' ? 'تعذر فتح نافذة الطباعة' : currentLanguage === 'en' ? 'Unable to open print dialog' : 'Impossibile aprire la finestra di stampa', 'error');
    }
}

// Save Settings
function saveSettings() {
    appData.settings = {
        companyName: document.getElementById('companyName').value,
        currency: document.getElementById('currency').value,
        language: document.getElementById('language').value,
        defaultDailyHours: parseFloat(document.getElementById('defaultDailyHours').value),
        weekendDays: [6, 7]
    };
    
    const saved = saveAppData();
    if (!saved) return;
    applySettings();
    
    // Force immediate update of settings titles
    const t = translations[appData.settings.language];
    
    // Update by ID immediately
    const generalSettingsTitle = document.getElementById('generalSettingsTitle');
    if (generalSettingsTitle) {
        generalSettingsTitle.textContent = t.generalSettings;
        console.log('Direct update - General Settings:', t.generalSettings);
    }
    
    const calculationSettingsTitle = document.getElementById('calculationSettingsTitle');
    if (calculationSettingsTitle) {
        calculationSettingsTitle.textContent = t.calculationSettings;
        console.log('Direct update - Calculation Settings:', t.calculationSettings);
    }
    
    const dataSettingsTitle = document.getElementById('dataSettingsTitle');
    if (dataSettingsTitle) {
        dataSettingsTitle.textContent = t.dataSettings;
        console.log('Direct update - Data Settings:', t.dataSettings);
    }
    
    showToast(translations[appData.settings.language].saveSuccess, 'success');
}

// Reset Settings
function resetSettings() {
    if (!confirm(translations[currentLanguage].confirmResetSettings)) return;
    
    appData.settings = {
        companyName: 'Sistema Ore Lavoro',
        currency: 'Euro',
        language: 'it',
        defaultDailyHours: 8,
        weekendDays: [6, 7]
    };
    
    const saved = saveAppData();
    if (!saved) return;
    applySettings();
    showToast(translations[appData.settings.language].resetSuccess, 'info');
}

// Export All Data
function exportAllData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `work_hours_backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
    showToast(translations[currentLanguage].exportDataSuccess, 'success');
}

// Import Data
function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                const importedData = JSON.parse(event.target.result);
                
                if (confirm(translations[currentLanguage].confirmImportData)) {
                    appData = importedData;
                    const saved = saveAppData();
                    if (!saved) return;
                    applySettings();
                    loadRecords();
                    showToast(translations[currentLanguage].importDataSuccess, 'success');
                }
            } catch (error) {
                showToast(translations[currentLanguage].invalidFile, 'error');
            }
        };
        
        reader.readAsText(file);
    };
    
    input.click();
}

// Show Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('i');
    
    // Set message
    toastMessage.textContent = message;
    
    // Set icon and color based on type
    toastIcon.className = 'fas ';
    switch(type) {
        case 'success':
            toastIcon.className += 'fa-check-circle';
            toastIcon.style.color = '#4caf50';
            break;
        case 'error':
            toastIcon.className += 'fa-exclamation-circle';
            toastIcon.style.color = '#f44336';
            break;
        case 'info':
            toastIcon.className += 'fa-info-circle';
            toastIcon.style.color = '#2196f3';
            break;
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Utility Functions
function formatCurrency(amount, currency = 'ريال') {
    return `${amount.toFixed(2)} ${currency}`;
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('ar-SA');
}


// Add event listeners for day checkboxes
document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox' && e.target.id && e.target.id.startsWith('day-')) {
        updateDayStatus(e.target);
    }
});

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + S to save record
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (document.getElementById('calculatorSection').classList.contains('active')) {
            saveRecord();
        }
    }
    
    // Ctrl/Cmd + P to export PDF
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        if (document.getElementById('calculatorSection').classList.contains('active')) {
            exportResults();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        // Add modal closing logic here if needed
    }
});
