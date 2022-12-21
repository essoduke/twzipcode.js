/**
 * TWzipcode v3.0 (https://code.essoduke.org/twzipcode)
 * @license MIT
 */
(function (factory) {

    'use strict';

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = factory();
    } else {
        /* jshint sub:true */
        window['TWzipcode'] = factory();
    }

}(function TWzipcodeFactory () {

    // Zipcode JSON data
    let database = {
        '基隆市': {'仁愛區': '200', '信義區': '201', '中正區': '202', '中山區': '203', '安樂區': '204', '暖暖區': '205', '七堵區': '206'},
        '臺北市': {'中正區': '100', '大同區': '103', '中山區': '104', '松山區': '105', '大安區': '106', '萬華區': '108', '信義區': '110', '士林區': '111', '北投區': '112', '內湖區': '114', '南港區': '115', '文山區': '116'},
        '新北市': {
          '萬里區': '207', '金山區': '208', '板橋區': '220', '汐止區': '221', '深坑區': '222', '石碇區': '223',
          '瑞芳區': '224', '平溪區': '226', '雙溪區': '227', '貢寮區': '228', '新店區': '231', '坪林區': '232',
          '烏來區': '233', '永和區': '234', '中和區': '235', '土城區': '236', '三峽區': '237', '樹林區': '238',
          '鶯歌區': '239', '三重區': '241', '新莊區': '242', '泰山區': '243', '林口區': '244', '蘆洲區': '247',
          '五股區': '248', '八里區': '249', '淡水區': '251', '三芝區': '252', '石門區': '253'
        },
        '宜蘭縣': {
          '宜蘭市': '260', '頭城鎮': '261', '礁溪鄉': '262', '壯圍鄉': '263', '員山鄉': '264', '羅東鎮': '265',
          '三星鄉': '266', '大同鄉': '267', '五結鄉': '268', '冬山鄉': '269', '蘇澳鎮': '270', '南澳鄉': '272'
        },
        '新竹市': {'東區': '300', '北區': '300', '香山區': '300'},
        '新竹縣': {
          '竹北市': '302', '湖口鄉': '303', '新豐鄉': '304', '新埔鎮': '305', '關西鎮': '306', '芎林鄉': '307',
          '寶山鄉': '308', '竹東鎮': '310', '五峰鄉': '311', '橫山鄉': '312', '尖石鄉': '313', '北埔鄉': '314',
          '峨眉鄉': '315'
        },
        '桃園市': {
          '中壢區': '320', '平鎮區': '324', '龍潭區': '325', '楊梅區': '326', '新屋區': '327', '觀音區': '328',
          '桃園區': '330', '龜山區': '333', '八德區': '334', '大溪區': '335', '復興區': '336', '大園區': '337',
          '蘆竹區': '338'
        },
        '苗栗縣': {
          '竹南鎮': '350', '頭份市': '351', '三灣鄉': '352', '南庄鄉': '353', '獅潭鄉': '354', '後龍鎮': '356',
          '通霄鎮': '357', '苑裡鎮': '358', '苗栗市': '360', '造橋鄉': '361', '頭屋鄉': '362', '公館鄉': '363',
          '大湖鄉': '364', '泰安鄉': '365', '銅鑼鄉': '366', '三義鄉': '367', '西湖鄉': '368', '卓蘭鎮': '369'
        },
        '臺中市': {
          '中區': '400', '東區': '401', '南區': '402', '西區': '403', '北區': '404', '北屯區': '406', '西屯區': '407', '南屯區': '408',
          '太平區': '411', '大里區': '412', '霧峰區': '413', '烏日區': '414', '豐原區': '420', '后里區': '421',
          '石岡區': '422', '東勢區': '423', '和平區': '424', '新社區': '426', '潭子區': '427', '大雅區': '428',
          '神岡區': '429', '大肚區': '432', '沙鹿區': '433', '龍井區': '434', '梧棲區': '435', '清水區': '436',
          '大甲區': '437', '外埔區': '438', '大安區': '439'
        },
        '彰化縣': {
          '彰化市': '500', '芬園鄉': '502', '花壇鄉': '503', '秀水鄉': '504', '鹿港鎮': '505', '福興鄉': '506',
          '線西鄉': '507', '和美鎮': '508', '伸港鄉': '509', '員林市': '510', '社頭鄉': '511', '永靖鄉': '512',
          '埔心鄉': '513', '溪湖鎮': '514', '大村鄉': '515', '埔鹽鄉': '516', '田中鎮': '520', '北斗鎮': '521',
          '田尾鄉': '522', '埤頭鄉': '523', '溪州鄉': '524', '竹塘鄉': '525', '二林鎮': '526', '大城鄉': '527',
          '芳苑鄉': '528', '二水鄉': '530'
        },
        '南投縣': {
          '南投市': '540', '中寮鄉': '541', '草屯鎮': '542', '國姓鄉': '544', '埔里鎮': '545', '仁愛鄉': '546',
          '名間鄉': '551', '集集鎮': '552', '水里鄉': '553', '魚池鄉': '555', '信義鄉': '556', '竹山鎮': '557',
          '鹿谷鄉': '558'
        },
        '嘉義市': {'東區': '600', '西區': '600'},
        '嘉義縣': {
          '番路鄉': '602', '梅山鄉': '603', '竹崎鄉': '604', '阿里山鄉': '605', '中埔鄉': '606', '大埔鄉': '607',
          '水上鄉': '608', '鹿草鄉': '611', '太保市': '612', '朴子市': '613', '東石鄉': '614', '六腳鄉': '615',
          '新港鄉': '616', '民雄鄉': '621', '大林鎮': '622', '溪口鄉': '623', '義竹鄉': '624', '布袋鎮': '625'
        },
        '雲林縣': {
          '斗南鎮': '630', '大埤鄉': '631', '虎尾鎮': '632', '土庫鎮': '633', '褒忠鄉': '634', '東勢鄉': '635',
          '臺西鄉': '636', '崙背鄉': '637', '麥寮鄉': '638', '斗六市': '640', '林內鄉': '643', '古坑鄉': '646',
          '莿桐鄉': '647', '西螺鎮': '648', '二崙鄉': '649', '北港鎮': '651', '水林鄉': '652', '口湖鄉': '653',
          '四湖鄉': '654', '元長鄉': '655'
        },
        '臺南市': {
          '中西區': '700', '東區': '701', '南區': '702', '北區': '704', '安平區': '708', '安南區': '709',
          '永康區': '710', '歸仁區': '711', '新化區': '712', '左鎮區': '713', '玉井區': '714', '楠西區': '715',
          '南化區': '716', '仁德區': '717', '關廟區': '718', '龍崎區': '719', '官田區': '720', '麻豆區': '721',
          '佳里區': '722', '西港區': '723', '七股區': '724', '將軍區': '725', '學甲區': '726', '北門區': '727',
          '新營區': '730', '後壁區': '731', '白河區': '732', '東山區': '733', '六甲區': '734', '下營區': '735',
          '柳營區': '736', '鹽水區': '737', '善化區': '741', '大內區': '742', '山上區': '743', '新市區': '744',
          '安定區': '745'
        },
        '高雄市': {
          '新興區': '800', '前金區': '801', '苓雅區': '802', '鹽埕區': '803', '鼓山區': '804', '旗津區': '805',
          '前鎮區': '806', '三民區': '807', '楠梓區': '811', '小港區': '812', '左營區': '813',
          '仁武區': '814', '大社區': '815', '岡山區': '820', '路竹區': '821',
          '阿蓮區': '822', '田寮區': '823',
          '燕巢區': '824', '橋頭區': '825', '梓官區': '826', '彌陀區': '827', '永安區': '828', '湖內區': '829',
          '鳳山區': '830', '大寮區': '831', '林園區': '832', '鳥松區': '833', '大樹區': '840', '旗山區': '842',
          '美濃區': '843', '六龜區': '844', '內門區': '845', '杉林區': '846', '甲仙區': '847', '桃源區': '848',
          '那瑪夏區': '849', '茂林區': '851', '茄萣區': '852'
        },
        '屏東縣': {
          '屏東市': '900', '三地門鄉': '901', '霧臺鄉': '902', '瑪家鄉': '903', '九如鄉': '904', '里港鄉': '905',
          '高樹鄉': '906', '鹽埔鄉': '907', '長治鄉': '908', '麟洛鄉': '909', '竹田鄉': '911', '內埔鄉': '912',
          '萬丹鄉': '913', '潮州鎮': '920', '泰武鄉': '921', '來義鄉': '922', '萬巒鄉': '923', '崁頂鄉': '924',
          '新埤鄉': '925', '南州鄉': '926', '林邊鄉': '927', '東港鎮': '928', '琉球鄉': '929', '佳冬鄉': '931',
          '新園鄉': '932', '枋寮鄉': '940', '枋山鄉': '941', '春日鄉': '942', '獅子鄉': '943', '車城鄉': '944',
          '牡丹鄉': '945', '恆春鎮': '946', '滿州鄉': '947'
        },
        '臺東縣': {
          '臺東市': '950', '綠島鄉': '951', '蘭嶼鄉': '952', '延平鄉': '953', '卑南鄉': '954', '鹿野鄉': '955',
          '關山鎮': '956', '海端鄉': '957', '池上鄉': '958', '東河鄉': '959', '成功鎮': '961', '長濱鄉': '962',
          '太麻里鄉': '963', '金峰鄉': '964', '大武鄉': '965', '達仁鄉': '966'
        },
        '花蓮縣': {
          '花蓮市': '970', '新城鄉': '971', '秀林鄉': '972', '吉安鄉': '973', '壽豐鄉': '974', '鳳林鎮': '975',
          '光復鄉': '976', '豐濱鄉': '977', '瑞穗鄉': '978', '萬榮鄉': '979', '玉里鎮': '981', '卓溪鄉': '982',
          '富里鄉': '983'
        },
        '金門縣': {'金沙鎮': '890', '金湖鎮': '891', '金寧鄉': '892', '金城鎮': '893', '烈嶼鄉': '894', '烏坵鄉': '896'},
        '連江縣': {'南竿鄉': '209', '北竿鄉': '210', '莒光鄉': '211', '東引鄉': '212'},
        '澎湖縣': {'馬公市': '880', '西嶼鄉': '881', '望安鄉': '882', '七美鄉': '883', '白沙鄉': '884', '湖西鄉': '885'}
    };

    /**
     * Trigger the event of Element
     * @param  {HTMLElement}  el  Element
     * @param  {string}  eventName  Event name
     * @param  {Function}  callback
     */
    const trigger = (el, eventName, callback) => {

        let event;

        // Namespace
        if (-1 !== eventName.indexOf('.')) {
            if (window.CustomEvent) {
                event = new CustomEvent(eventName);
            }
        } else {
            event = new Event(eventName, {"bubbles": true, "cancelable": true});
            document.dispatchEvent(event);
        }

        el.dispatchEvent(event);

        if (Helper.isFunction(callback)) {
            callback.call();
        }
    };

    /**
     *
     */
    class Helper {
        /**
         * Deep copy
         * @param  {*}  [...args]  Arguments
         */
        static deepExtend (...args) {

            // Variables
            let extended = {},
                deep = false,
                length = args.length,
                i = 0;

            // Check if a deep merge
            if ('boolean' === typeof args[0]) {
                deep = args[0];
                i += 1;
            }

            // Merge the object into the extended object
            const merge = (obj) => {
                for (let prop in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                        // If deep merge and property is an object, merge properties
                        extended[prop] = deep && this.isObject(obj[prop]) ?
                                         this.deepExtend(true, extended[prop], obj[prop] ) :
                                         obj[prop];
                    }
                }
            };

            // Loop through each object and conduct a merge
            for (; i < length; i += 1) {
                let obj = args[i];
                merge(obj);
            }

            return extended;
        }

        /**
         * Find matched key path in Object
         * @param  {Object}  obj  Object
         * @param  {string}  field  Key path (with comma)
         * @return {*}
         */
        static findObject (obj, field) {

            if (field && this.isObject(obj)) {
                let jo = obj;
                if (this.isString(field)) {
                    let str = field.split(/\./g);
                    for (let i of str) {
                        if (jo.hasOwnProperty(i)) {
                            jo = jo[i];
                        }
                    }
                    return jo;
                }
            }
        }
        /**
         * 轉換異體字 [台]為 [臺]
         *
         * @param  {string} value
         * @return {string}
         */
        static transfer (value) {
            return this.isString(value) ? value.replace(/[台]+/gi, '臺') : value;
        }
        /**
         * Check variable has defined and not null.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isset (...args) {
            let i = true;
            for (let obj of args) {
                i = i && (('undefined' !== typeof obj || Object.prototype.toString.call(obj) !== '[object Undefined]') && null !== obj);
            }
            return i;
        }
        /**
         * Check variable is HTMLElement or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isDOM (...args) {
            let i = true;
            for (let obj of args) {
                i = i && obj instanceof HTMLElement;
            }
            return i;
        }

        /**
         * Check variable is string or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isString (...args) {
            let i = true;
            for (let obj of args) {
                i = i && ('string' === typeof obj || Object.prototype.toString.call(obj) === '[object String]');
            }
            return i;
        }
        /**
         * Check variable is number or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isNumeric (...args) {
            let i = true;
            for (let obj of args) {
                i = i && /^[0-9]+$/.test(obj);
            }
            return i;
        }
        /**
         * Check variable is boolean or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isBool (...args) {
            let i = true;
            for (let obj of args) {
                i = i && 'boolean' === typeof obj || Object.prototype.toString.call(obj) === '[object Boolean]';
            }
            return i;
        }
        /**
         * Check variable is Object prototype or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isArray (...args) {
            let i = true;
            for (let obj of args) {
                i = i && (obj instanceof Array || Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Array]');
            }
            return i;
        }
        /**
         * Check variable is Object prototype or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isObject (...args) {
            let i = true;
            for (let obj of args) {
                i = i && ('object' === typeof obj && Object.prototype.toString.call(obj) === '[object Object]' && null !== obj);
            }
            return i;
        }
        /**
         * Check variable is function or not.
         * @param  {*}  args - Variable
         * @return {boolean}
         */
        static isFunction (...args) {
            let i = true;
            for (let obj of args) {
                i = i && ('function' === typeof obj || Object.prototype.toString.call(obj) === '[object Function]');
            }
            return i;
        }
    }

    /**
     * TWzipcode class
     * @class
     */
    return class TWzipcode {

        version = '3.0';

        database;
        options;
        container;
        selector;
        instance = {};
        fetch;

        /**
         * @param  {string|HTMLelement}  [selector=".twzipcode"]  TWzipcode Element
         * @param  {Object}  [options]  TWzipcode options
         * @return {TWzipcode}
         */
        constructor (selector = '.twzipcode', options = {}) {

            // Default options
            this.options = Helper.deepExtend(true, {
                county: {
                    tag: 'select',
                    name: 'county',
                    css: '',
                    label: '縣市', //(string)預設選項文字
                    value: '', //(string)預設值
                    hidden: false, //(bool|string|array)要隱藏的縣市
                    onChange: null //function
                },
                district: {
                    tag: 'select',
                    name: 'district',
                    css: '',
                    label: '鄉鎮市區', //(string)預設選項文字
                    value: '', //(string)預設值
                    hidden: false, //(bool|string|array) 要隱藏的鄉鎮市區
                    onChange: null //function
                },
                zipcode: {
                    tag: 'input',
                    type: 'hidden',
                    name: 'zipcode',
                    css: '',
                    value: '', //預設值
                    onKeyup: null //function
                },
                address: {
                    tag: 'input',
                    type: 'text',
                    name: 'address',
                    css: '',
                    value: '', //預設值
                    onKeyup: null //function
                },
                combine: true, //(bool)是否將 zipcode 與鄉鎮市區清單整合
                islands_key: ['綠島鄉', '蘭嶼鄉', '金門縣', '連江縣', '澎湖縣', '琉球鄉'], //(bool|array)離島範圍，可以是縣市名稱或郵遞區號
                islands_hidden: false, //(bool)是否隱藏離島
            }, options);

            this.database = database;

            if (Helper.isString(selector)) { //參數1=字串
                this.container = document.querySelectorAll(selector);
            } else if (Helper.isDOM(selector)) { //參數1=DOM
                this.container = [selector];
            } else if (selector instanceof NodeList || Object.prototype.isPrototypeOf.call(NodeList.prototype, selector)) {
                this.container = selector;
            } else if (Helper.isObject(selector)) { //參數1=選項
                this.container = document.querySelectorAll('.twzipcode');
                this.options = Helper.deepExtend(true, this.options, selector);
            } else {
                throw '錯誤：無法初始化 Selector 元素。'
            }

            this.init();
            this.bindEvents();
            this.trigger();
            return this;
        }

        /**
         * 初始化: 產生 option
         */
        init () {

            const islandsKey = this.options.islands_key,
                  islandsHidden = Boolean(this.options.islands_hidden),
                  hideCounty = this.options.county.hidden;

            // County
            this.container.forEach((elem) => {

                let {c, d, z, a} = this.createEmelents(elem);
                let id = Math.random().toString(36).substring(2, 10), h = [];

                elem.dataset.id = id;

                if (Helper.isDOM(c, d)) {

                    if (Helper.isDOM(a)) {
                        a.dataset.id = `address-${id}`;
                    }

                    let defaultDistrictOption = `<option value="">${'label' in d.dataset ? d.dataset.label : this.options.district.label}</option>`;

                    // push to instance
                    this.instance[id] = {
                        'parent': elem,
                        'county': c,
                        'district': d,
                        'zipcode': z,
                        'address': a
                    };

                    let label = 'label' in c.dataset ? c.dataset.label : this.options.county.label;
                    const had = c.dataset.hasOwnProperty('loaded') && Boolean(c.dataset.loaded);

                    h.push(`<option value="">${label}</option>`);
                    Object.keys(this.database).forEach((county) => {
                        const c1 = islandsHidden && islandsKey.includes(county); //隱藏離島且 屬於離島字串
                        const c2 = (Helper.isString(hideCounty) || Helper.isArray(hideCounty)) && hideCounty.includes(county); //有指定隱藏的縣市
                        if (!(c1 || c2)) {
                            h.push(`<option value="${county}">${county}</option>`);
                        }
                    });

                    c.dataset.id = `county-${id}`;

                    if (!had) {
                        c.innerHTML = h.join('');
                        c.dataset.loaded = true;
                        d.dataset.id = `district-${id}`;
                        d.innerHTML = defaultDistrictOption;
                    }

                }
            });
            return this;
        }
        /**
         * @param  {HTMLElement}  elem  Container
         * @return {Object}
         */
        createEmelents (elem) {

            const query = () => {
                return {
                    "c": elem.querySelector('[data-role="county"]'),
                    "d": elem.querySelector('[data-role="district"]'),
                    "z": elem.querySelector('[data-role="zipcode"]'),
                    "a": elem.querySelector('[data-role="address"]')
                };
            };
            let childs = query();

            if (Helper.isDOM(childs.c, childs.d, childs.z)) {
                return childs;
            }

            for (let na in this.options) {
                let opt = this.options[na];
                if (false !== opt) {
                    let el = document.createElement(opt.tag);
                    el.dataset.role = na;
                    el.setAttribute('name', opt.name);
                    el.setAttribute('class', opt.css);
                    switch (opt.tag) {
                        case 'input':
                            el.setAttribute('type', this.options.combine ? 'hidden' : 'text');
                            break;
                        default:
                            el.setAttribute('label', this.options.label);
                    }
                    elem.appendChild(el);
                }
            }
            return query();
        }

        /**
         * 綁定事件
         */
        bindEvents () {

            const parent         = this,
                  isCombine      = Boolean(this.options.combine),
                  islandsKey     = this.options.islands_key,
                  islandsHidden  = Boolean(this.options.islands_hidden),
                  districtLabel  = this.options.district.label,
                  hideDistrict   = this.options.district.hidden,
                  countyChange   = this.options.county.onChange,
                  districtChange = this.options.district.onChange,
                  database       = this.database;

            //
            const onCountyChange = function (e) {
                const self = e.target;
                const db = Helper.findObject(database, self.value);
                let __id, matched = self.dataset.id.match(/.*\-(.*)/);
                let h = [];

                if (Helper.isset(matched[1])) {
                    __id = matched[1];
                }

                self.dataset.listener = true;

                if (db) {
                    for (let district in db) {
                        const c1 = islandsHidden && islandsKey.includes(district); //隱藏離島且 屬於離島字串
                        const c2 = (Helper.isString(hideDistrict) || Helper.isArray(hideDistrict)) && hideDistrict.includes(district); //有指定隱藏的縣市
                        if (!(c1 || c2)) {
                            let v = isCombine ? `${db[district]} ${district}` : district;
                            //let v = district;
                            h.push(`<option value="${district}">${v}</option>`);
                        }
                    };
                    this.district.innerHTML = h.join('');
                } else {
                    let label = 'label' in this.district.dataset ? this.district.dataset.label : districtLabel;
                    this.district.innerHTML = `<option value="">${label}</option>`;
                }

                if (Helper.isFunction(countyChange)) {
                    countyChange.call(parent, __id, self, e);
                }
                trigger(this.district, 'change');
            };

            // district change
            const onDistrictChange = function (e) {
                const self = e.target;
                let __id, matched = self.dataset.id.match(/.*\-(.*)/);
                if (Helper.isset(matched[1])) {
                    __id = matched[1];
                }

                self.dataset.listener = true;

                if (database.hasOwnProperty(this.county.value) &&
                    database[this.county.value].hasOwnProperty(self.value)
                ) {
                    const zip = database[this.county.value][self.value];
                    if (Helper.isDOM(this.zipcode)) {
                        this.zipcode.value = zip.toString();
                    }
                    if (Helper.isFunction(districtChange)) {
                        districtChange.call(parent, __id, self, e);
                    }
                } else {
                    if (this.zipcode) {
                        this.zipcode.value = '';
                    }
                    self.innerHTML = `<option value="">${districtLabel}</option>`;
                }
            };

            // Find county,district by zipcode
            const onZipcodeKeyup = function (e) {
                const self = e.target;
                let find;

                self.dataset.listener = true;

                loop1:
                    for (let county in database) {
                loop2:
                        for (let district in database[county]) {
                            if (database[county].hasOwnProperty(district) && self.value == database[county][district]) {
                                find = {
                                    'county': county,
                                    'district': district,
                                    'zipcode': self.value
                                };
                                break loop1;
                            }
                        }
                    }

                let interval;

                if (Helper.isObject(find) && 'county' in find && 'district' in find && 'zipcode' in find) {
                    const wait = function (ms = 10) {
                        return new Promise((resolve, reject) => {
                            window.setTimeout(resolve, ms);
                        });
                    };
                    wait().then(() => {
                        this.county.value = find.county;
                        trigger(this.county, 'change');
                        return wait();
                    });
                    wait().then(() => {
                        this.district.value = find.district;
                        trigger(this.district, 'change');
                        return wait();
                    });

                }
                return find;
            };

            // Address blur
            const onAddressBlur = (e) => {
                let v = Helper.transfer(e.target.value);
                let parse = this.parseAddress(v);
                if (Helper.isObject(parse)) {
                    v = v.replace(parse.zipcode, '')
                         .replace(parse.county, '')
                         .replace(parse.district, '');
                }
                e.target.value = v.trim();
            };
            //
            Object.values(this.instance).forEach((obj) => {
                if (Helper.isDOM(obj.county, obj.district)) {
                    const hadCounty = obj.county.dataset.hasOwnProperty('listener') && Boolean(obj.county.dataset.listener);
                    const hadDistrict = obj.district.dataset.hasOwnProperty('listener') && Boolean(obj.district.dataset.listener);
                    if (!hadCounty) {
                        obj.county.addEventListener('change', onCountyChange.bind(obj));
                    }
                    if (!hadDistrict) {
                        obj.district.addEventListener('change', onDistrictChange.bind(obj));
                    }
                }
                if (Helper.isDOM(obj.zipcode)) {
                    const hadZipcode = obj.zipcode.dataset.hasOwnProperty('listener') && Boolean(obj.zipcode.dataset.listener);
                    if (!hadZipcode) {
                        obj.zipcode.addEventListener('keyup', onZipcodeKeyup.bind(obj));
                    }
                }
                if (Helper.isDOM(obj.address)) {
                    const hadAddress = obj.address.dataset.hasOwnProperty('listener') && Boolean(obj.address.dataset.listener);
                    if (!hadAddress) {
                        obj.address.addEventListener('blur', onAddressBlur);
                    }
                }
            });
        }
        /**
         *
         */
        trigger () {
            for (let obj of Object.values(this.instance)) {
                if (Helper.isDOM(obj.zipcode)) {
                    if ('value' in obj.zipcode.dataset) {
                        this.zipcode(obj.zipcode.dataset.value);
                        break;
                    }
                }
                if (Helper.isDOM(obj.county, obj.district)) {
                    if ('value' in obj.county.dataset) {
                        this.county(obj.county.dataset.value);
                    }
                    if ('value' in obj.district.dataset) {
                        this.district(obj.district.dataset.value);
                    }
                }
            }
        }

        /**
         * @param  {string|number}  id  Group ID or index (0=1st)
         * @return {TWzipcode}
         */
        nth (id) {

            const instance = this.instance;
            let obj;

            if (Helper.isNumeric(id)) {
                let find = Object.values(instance).filter((o, i) => i === id);
                if (find.length) {
                    obj = [find[0]];
                }
            } else if (Helper.isString(id) && instance.hasOwnProperty(id)) {
                obj = [instance[id]];
            } else {
                obj = instance;
            }
            this.fetch = obj;
            return this;
        }
        /**
         * 取值
         * @param  {string|Array}  key
         * @return  {Object}
         */
        get (field) {

            const instance = Helper.isset(this.fetch) ? this.fetch : this.instance;
            const length   = Object.keys(instance).length;

            let keys = ['county', 'district', 'zipcode'];
            let result = [];

            if (Helper.isArray(field)) {
                keys = field;
            } else if (Helper.isString(field) && keys.includes(field)) {
                keys = [field];
            }

            Object.values(instance).forEach((m) => {
                let p = {};
                for (let f of keys) {
                    if (m.hasOwnProperty(f) && Helper.isset(m[f])) {
                        p[f] = m[f].value;
                    }
                }
                result.push(p);
            });

            if (length === 1) {
                if (Helper.isString(field) && field in result[0]) {
                    return result[0][field];
                } else {
                    return result[0];
                }
            }
            return result;
        }
        /**
         * 給值
         * .set({'county': 'COUNTY', 'district': 'DISTRICT', 'zipcode': 'ZIPCODE'})
         * .set(830) //
         * @param  {Object|string}  data  給定值
         * @param  {string}  [data.county]  縣市
         * @param  {string}  [data.district]  鄉鎮市區
         * @param  {string}  [data.zipcode]  郵遞區號
         * @return {TWzipcode}
         */
         set (data) {

            const instance = Helper.isset(this.fetch) ? this.fetch : this.instance;

            let props = {
                county: null,
                district: null,
                zipcode: null
            };

            /**
             * @param  {number}  [ms=10]  MillionSeconds
             * @return {Promise}
             */
            const wait = function (ms = 10) {
                return new Promise((resolve, reject) => {
                    window.setTimeout(resolve, ms);
                });
            };

            if (Helper.isObject(data)) {
                props = data;
            } else if (Helper.isNumeric(data)) {
                props.zipcode = data;
            }

            Object.values(instance).forEach((m) => {
                if ('county' in props && Helper.isString(props.county)) {
                    wait().then(() => {
                        m.county.value = Helper.transfer(props.county);
                        trigger(m.county, 'change');
                        return wait();
                    });
                }
                if ('district' in props && Helper.isString(props.district)) {
                    wait().then(() => {
                        m.district.value = Helper.transfer(props.district);
                        trigger(m.district, 'change');
                        return wait();
                    });
                }
                if ('zipcode' in props && Helper.isNumeric(props.zipcode)) {
                    wait().then(() => {
                        m.zipcode.value = props.zipcode;
                        trigger(m.zipcode, 'keyup');
                        return wait();
                    });
                }
            });
            return this;
        }
        /**
         * @param  {string|undefined} setting  Set value
         * @return {string|bool}
         */
        county (setting) {
            if (Helper.isString(setting)) {
                this.set({'county': setting});
                return this;
            }
            return this.get('county');
        }
        /**
         * @param  {string|undefined} setting  Set value
         * @return {string|bool}
         */
        district (setting) {
            if (Helper.isString(setting)) {
                this.set({'district': setting});
                return this;
            }
            return this.get('district');
        }
        /**
         * @param  {string|undefined} setting  Set value
         * @return {string|bool}
         */
        zipcode (setting) {
            if (Helper.isString(setting)) {
                this.set({'zipcode': setting});
                return this;
            }
            return this.get('zipcode');
        }
        /**
         * @param  {string|Array}  [cond]  Islands Conditions (county/district name, zipcode)
         * @return {Object|boolean}
         */
        isIslands (cond) {

            const instance = Helper.isset(this.fetch) ? this.fetch : this.instance;
            const length   = Object.keys(instance).length;
            let i  = (Helper.isString(cond) || Helper.isArray(cond)) ? cond : this.options.islands_key;
            let r  = {};

            Object.keys(instance).forEach((k) => {
                const o = this.instance[k];
                let s  = false;
                if (o.county.value.length) {
                    s = s || i.includes(o.county.value);
                }
                if (o.district.value.length) {
                    s = s || i.includes(o.district.value);
                }
                if (o.zipcode.value.length) {
                    s = s || i.includes(o.zipcode.value);
                }
                r[k] = s;
            });

            if (length === 1) {
                const f = Object.values(r).filter((o, i) => i === 0);
                if (f.length) {
                    return f[0];
                }
            }
            return r;
        }

        /**
         * 解析臺灣地址
         * @param  {string}  addr  Input address
         * @return {Object|undefined}
         */
        parseAddress (addr) {
            addr = Helper.transfer(addr);
            const re = /(?<zipcode>\d+)?(?<county>\D+[縣市])(?<district>\D+?(市區|鎮區|鎮市|[鄉鎮市區]))(?<village>\D+?[村里])?(?<neighbor>\d+[鄰])?(?<road>\D+?(村路|[路街道段]))?(?<section>.+?段)?(?<lane>.+?巷)?(?<alley>\d+弄)?(?<num>.+號)?(?<others>.+)?/gi;
            const parse = re.exec(addr);
            if (Helper.isset(parse)) {
                if (Helper.isset(parse['groups'])) {
                    return parse['groups'];
                }
            }
        }
        /**
         * 刪除 HTML Node
         */
        destroy () {

            if (Helper.isset(this.fetch)) {
                Object.keys(this.fetch).forEach(m => {
                    const o = this.fetch[m];
                    if (o.hasOwnProperty('parent') && 'id' in o.parent.dataset) {
                        const id = o.parent.dataset.id;
                        if (Helper.isset(this.instance[id])) {
                            o.parent.innerHTML = '';
                            this.fetch.splice(m, 1);
                        }
                    }
                });
            } else {
                Object.keys(this.instance).forEach(m => {
                    const o = this.instance[m];
                    if (o.hasOwnProperty('parent') && 'id' in o.parent.dataset) {
                        o.parent.innerHTML = '';
                    }
                });
            }
        }

        /**
         * @return {string}
         */
        serialize () {
            const result = [];
            Object.values(this.instance).forEach((k) => {
                const d = {};
                if (k.hasOwnProperty('county')) {
                    d[k.county.name] = k.county.value;
                }
                if (k.hasOwnProperty('district')) {
                    d[k.district.name] = k.district.value;
                }
                if (k.hasOwnProperty('zipcode')) {
                    d[k.zipcode.name] = k.zipcode.value;
                }
                result.push(new URLSearchParams(d).toString());
            });
            return result.join('&');
        }
    };
}));
//#EOF
