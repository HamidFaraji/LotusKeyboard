class LotusKeyboard {
    private options: any;
    private input: HTMLInputElement;
    private currentLang: string;
    private upperCase: boolean;
    private mobileKeyboard: boolean;
    private keyboardMarkup: string;
    private keys: JQuery<HTMLElement>;
    private normalKeys: JQuery<HTMLElement>;
    private backSpaceKeys: JQuery<HTMLElement>;
    private capsLockKeys: JQuery<HTMLElement>;
    private shiftKeys: JQuery<HTMLElement>;
    private returnKeys: JQuery<HTMLElement>;
    private multiLangKeys: JQuery<HTMLElement>;
    private aliasKeys: JQuery<HTMLElement>;

    constructor(options: any) {
        this.options = options;
        this.input = document.querySelector(this.options.input);
        this.currentLang = "persian";
        this.upperCase = false;
        this.mobileKeyboard = false;
        this.keyboardMarkup = `
            <div class="container">
                <div class="keyboardRow">
                    <div class="keyboardColumn2 hidden-xs">
                        <button class="keyboardButton functional" data-key-type="backSpace"><i class="glyphicon glyphicon-backspace"></i></button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="]" data-alias="{">چ</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="[" data-alias="}">ج</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="p" data-alias="/">ح</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="o" data-alias="[">خ</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="i" data-alias="]">ه</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="u" data-alias=",">ع</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="y" data-alias="؛">غ</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="t" data-alias="،">ف</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="r" data-alias="!">ق</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="e" data-alias="ٍ">ث</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="w" data-alias="ٌ">ص</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="q" data-alias="ً">ض</button>
                    </div>
                    <div class="keyboardColumn1 hidden-xs">
                        <button class="keyboardButton functional" data-key-type="close"><i class="glyphicon glyphicon-cancel"></i></button>
                    </div>
                </div>
                <div class="keyboardRow">
                    <div class="keyboardColumn3 hidden-xs">
                        <button class="keyboardButton primary" data-key-type="return"><i class="glyphicon glyphicon-return"></i></button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="'" data-alias="&quot;">گ</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary=";" data-alias=":">ک</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="l" data-alias="»">م</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="k" data-alias="«">ن</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="j" data-alias="ـ">ت</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="h" data-alias="آ">ا</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="g" data-alias="ۀ">ل</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="f" data-alias="ّ">ب</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="d" data-alias="ِ">ی</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="s" data-alias="ُ">س</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="a" data-alias="َ">ش</button>
                    </div>
                    <div class="keyboardColumn1 hidden-xs">
                        <button class="keyboardButton functional" data-key-type="capsLock"><i class="glyphicon glyphicon-globe"></i></button>
                    </div>
                </div>
                <div class="keyboardRow">
                    <div class="keyboardColumn2 visible-xs">
                        <button class="keyboardButton functional" data-key-type="backSpace"><i class="glyphicon glyphicon-backspace"></i></button>
                    </div>
                    <div class="keyboardColumn2 hidden-xs">
                        <button class="keyboardButton functional" data-key-type="shift">Shift</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="~" data-alias="|">پ</button>
                    </div>
                    <div class="keyboardColumn1 hidden-xs">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="?" data-alias="؟">/</button>
                    </div>
                    <div class="keyboardColumn1 hidden-xs">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="&gt;" data-alias="&gt;">.</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="&lt;" data-alias="&lt;">و</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="m" data-alias="ء">ئ</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="n" data-alias="أ">د</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="b" data-alias="إ">ذ</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="v" data-alias="ؤ">ر</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="c" data-alias="ژ">ز</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="x" data-alias="ي">ط</button>
                    </div>
                    <div class="keyboardColumn1">
                        <button class="keyboardButton" data-key-type="normal" data-secondary="z" data-alias="ة">ظ</button>
                    </div>
                    <div class="keyboardColumn2 hidden-xs">
                        <button class="keyboardButton functional" data-key-type="shift">Shift</button>
                    </div>
                </div>
                <div class="keyboardRow">
                    <div class="keyboardColumn4 visible-xs">
                        <button class="keyboardButton primary" data-key-type="return"><i class="glyphicon glyphicon-return"></i></button>
                    </div>
                    <div class="keyboardColumn15 keyboardColumnMobile7">
                        <button class="keyboardButton" data-key-type="normal">&nbsp;</button>
                    </div>
                    <div class="keyboardColumn2 visible-xs">
                        <button class="keyboardButton functional" data-key-type="capsLock"><i class="glyphicon glyphicon-globe"></i></button>
                    </div>
                    <div class="keyboardColumn2 visible-xs">
                        <button class="keyboardButton functional" data-key-type="shift">Shift</button>
                    </div>
                </div>
            </div>`;
    }

    private detectMobile(): boolean {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    public initialize(): void {
        this.renderKeyboard();
        this.handlePressKeys();
        this.keys = $(this.options.keyboard).find('.keyboardButton');
        this.normalKeys = $(this.options.keyboard).find('.keyboardButton[data-key-type="normal"]');
        this.backSpaceKeys = $(this.options.keyboard).find('.keyboardButton[data-key-type="backSpace"]');
        this.capsLockKeys = $(this.options.keyboard).find('.keyboardButton[data-key-type="capsLock"]');
        this.shiftKeys = $(this.options.keyboard).find('.keyboardButton[data-key-type="shift"]');
        this.returnKeys = $(this.options.keyboard).find('.keyboardButton[data-key-type="return"]');
        this.multiLangKeys = $(this.options.keyboard).find('.keyboardButton[data-secondary]');
        this.aliasKeys = $(this.options.keyboard).find('.keyboardButton[data-alias]');

        const keyboardContainer = $(this.options.keyboard);
        const keyboardToggler = $(this.options.toggler);
        const searchBoxContainer = $(this.options.input);

        $(document).bind('mouseup', (e) => {
            const invisibleCondition = !keyboardContainer.is(e.target) && !keyboardToggler.is(e.target) && !searchBoxContainer.is(e.target) && keyboardContainer.has(e.target).length === 0 && keyboardToggler.has(e.target).length === 0 && searchBoxContainer.has(e.target).length === 0;
            if (invisibleCondition) {
                this.toggleKeyboard('hide');
                $(this.input).removeAttr('readonly');
                this.mobileKeyboard = false;
            }
        });

        $(this.options.toggler).bind('click', (e) => {
            e.preventDefault();
            if (this.detectMobile()) {
                if ($(this.input).attr('readonly') == 'readonly') {
                    $(this.input).removeAttr('readonly');
                    this.mobileKeyboard = false;
                } else {
                    $(this.input).attr('readonly', 'readonly');
                    this.mobileKeyboard = true;
                }
            }
            this.toggleKeyboard();
            return false;
        });
    }

    private renderKeyboard(): void {
        $(this.options.keyboard).html(this.keyboardMarkup);
    }

    private handlePressKeys(): void {
        $(this.options.keyboard).on('click', '.keyboardButton', (e) => {
            const keyType = $(e.currentTarget).attr('data-key-type');
            switch (keyType) {
                case 'normal':
                    this.normalKeysHandler(e);
                    break;
                case 'backSpace':
                    this.backSpaceKeysHandler(this.mobileKeyboard);
                    break;
                case 'capsLock':
                    this.capsLockKeysHandler(e);
                    break;
                case 'shift':
                    this.shiftKeysHandler(e);
                    break;
                case 'return':
                    this.returnKeysHandler(e);
                    break;
                case 'close':
                    this.toggleKeyboard('hide');
                    $(this.input).removeAttr('readonly');
                    break;
            }
            return false;
        });
    }

    private normalKeysHandler(e: JQuery.ClickEvent): void {
        this.insertText(e.target.textContent, this.mobileKeyboard);
    }

    private backSpaceKeysHandler(fromLast: boolean): void {
        let position = this.input.selectionStart;
        if (!fromLast) {
            this.input.value = this.input.value.substring(0, position - 1) + this.input.value.substring(position, this.input.value.length);
            position--;
        } else {
            this.input.value = this.input.value.substring(0, this.input.value.length - 1);
        }
        this.focusInPosition(position);
    }

    private capsLockKeysHandler(e: JQuery.ClickEvent): void {
        this.capsLockKeys.toggleClass('on');
        this.shiftKeys.removeClass('on');
        this.currentLang = this.currentLang == "persian" ? "english" : "persian";
        this.multiLangKeys.each(function (e) {
            const currentText = $(this).text();
            $(this).text($(this).attr('data-secondary'));
            $(this).attr('data-secondary', currentText);
        });
    }

    private shiftKeysHandler(e: JQuery.ClickEvent): void {
        this.shiftKeys.toggleClass('on');
        if (this.currentLang == "persian") {
            this.aliasKeys.each(function (e) {
                const currentText = $(this).text();
                $(this).text($(this).attr('data-alias'));
                $(this).attr('data-alias', currentText);
            });
        } else {
            this.aliasKeys.each(function (e) {
                if (this.upperCase) {
                    this.upperCase = false;
                    $(this).text($(this).text().toLocaleLowerCase());
                } else {
                    this.upperCase = true;
                    $(this).text($(this).text().toLocaleUpperCase());
                }
            });
        }
    }

    private returnKeysHandler(e: JQuery.ClickEvent): void {
        $(this.options.input).closest('form').submit();
        this.toggleKeyboard('hide');
    }

    private toggleKeyboard(mode: string = 'toggle'): void {
        switch (mode) {
            case 'toggle':
                $(this.options.keyboard).toggleClass('hiddenKeyboard');
                break;
            case 'hide':
                $(this.options.keyboard).addClass('hiddenKeyboard');
                break;
            case 'show':
                $(this.options.keyboard).removeClass('hiddenKeyboard');
                break;
        }
    }

    private focusInPosition(position: number): void {
        this.input.selectionStart = position;
        this.input.selectionEnd = position;
        this.input.focus();
    }

    private insertText(text: string, concat: boolean = false): void {
        let position = this.input.selectionStart;
        if (!concat) {
            const front = this.input.value.substring(0, position);
            const back = this.input.value.substring(position, this.input.value.length);
            this.input.value = front + text + back;
            position = position + text.length;
        } else {
            this.input.value += text;
            position = this.input.value.length - 1;
        }
        this.focusInPosition(position);
    }
}
