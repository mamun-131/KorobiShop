import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarMenuService } from '../shared/sidebar/sidebar-menu.service';
import { SidenavMenu } from '../shared/sidebar/sidebar-menu.model';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../shared/services/cart.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
    public sidenavMenuItems: Array<any>;
    public url: any;

    products: Product[];
    indexProduct: number;
    shoppingCartItems: CartItem[] = [];

    constructor(public router: Router, public sidenavMenuService: SidebarMenuService, private cartService: CartService) {
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        })
    }

    ngOnInit() { }

    public banners = [];
    isSearchVisible = false;
    public mainMenus = ['করবী', 'বই', 'স্টেশনারি', 'আর্ট & ক্রাফট', 'প্রাতিষ্ঠানিক অর্ডার'];

    public mainMenu: string = 'করবী';
    public flags = [
        { name: 'English', image: 'assets/images/flags/gb.svg' },
        { name: 'German', image: 'assets/images/flags/de.svg' },
        { name: 'French', image: 'assets/images/flags/fr.svg' },
        { name: 'Russian', image: 'assets/images/flags/ru.svg' },
        { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
    ]
    public flag: any;


    showSearch() {
        this.isSearchVisible = true;//!this.isSearchVisible;
    }
    hideSearch() {
        this.isSearchVisible = false;
    }


    public changeMainMenu(mainMenu) {
        this.mainMenu = mainMenu;
    }




    navItems: SidenavMenu[] = [
        {
            displayName: 'করবী',
            iconName: 'recent_actors',
            route: '/home/products/all'
        },
        {
            displayName: 'বই',
            iconName: 'movie_filter',
            children: [

                {
                    displayName: 'বিশেষ ছাড়',
                    iconName: 'recent_actors',
                    route: '/home'
                },
                {

                    displayName: 'বিষয়',
                    iconName: 'group',
                    children: [
                        {
                            displayName: 'ছোটদের বই',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'English Fiction',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'Bangla Fiction',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'Bangla Nonfiction',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'অনুবাদ',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'মেডিকেল বুক',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'আইন বই',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'English Proficiency',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'বাংলায় ইঞ্জিনিয়ারিং',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ইসলামিক বই',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'সফটওয়্যার ইঞ্জিনিয়ারিং',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'বিবিএ',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'এমবিএ',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ইতিহাস',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'রান্না ও খাদ্য পুষ্টি',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'জীবনী',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'গণমাধ্যম ও সাংবাদিকতা',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'মুক্তিযুদ্ধ',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'গণিত',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'খেলাধুলা',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'শিক্ষা ও গবেষণা',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ভর্তি, নিয়োগ ও পরীক্ষা প্রস্তুতি',
                            iconName: 'person',
                            route: 'bishoi',
                        }
                        ,
                        {
                            displayName: 'আত্মউন্নয়ন, মোটিভেশনাল',
                            iconName: 'person',
                            route: 'bishoi',
                        }
                    ]
                },
                {
                    displayName: 'লেখক',
                    iconName: 'speaker_notes',
                    children: [
                        {
                            displayName: 'হুমায়ুন আহমেদ',
                            iconName: 'star_rate',
                            route: 'lekhok'
                        },
                        {
                            displayName: 'মুহম্মদ জাফর ইকবাল',
                            iconName: 'star_rate',
                            route: 'lekhok'
                        },
                        {
                            displayName: 'সৈয়দ শামসুল হক',
                            iconName: 'star_rate',
                            route: 'my-ally-cli'
                        },
                        {
                            displayName: 'জহির রায়হান',
                            iconName: 'star_rate',
                            route: 'become-angular-tailer'
                        }
                        ,
                        {
                            displayName: 'সমরেশ মজুমদার',
                            iconName: 'star_rate',
                            route: 'become-angular-tailer'
                        }

                    ]
                },
                {
                    displayName: 'প্রকাশনী',
                    iconName: 'feedback',
                    children: [
                        {
                            displayName: 'অন্যপ্রকাশ	অন্যপ্রকাশ',
                            iconName: 'star_rate',
                            route: 'prokashoni'
                        },
                        {
                            displayName: 'বাংলা একাডেমি',
                            iconName: 'star_rate',
                            route: 'what-up-web'
                        },
                        {
                            displayName: 'বাতিঘর প্রকাশনী',
                            iconName: 'star_rate',
                            route: 'my-ally-cli'
                        },
                        {
                            displayName: 'ইসলামিক ফাউন্ডেশন',
                            iconName: 'star_rate',
                            route: 'become-angular-tailer'
                        }
                    ]
                },
                {
                    displayName: 'প্যাকেজ',
                    iconName: 'feedback',
                    route: '/home/products/bisheshchar'

                },
                {
                    displayName: 'জনপ্রিয় বই',
                    iconName: 'feedback',
                    route: '/home/products/bisheshchar'

                },
                {
                    displayName: 'নতুন প্রকাশিত বই',
                    iconName: 'feedback',
                    route: '/home/products/bisheshchar'

                },
                {
                    displayName: 'প্রি- অর্ডার বই',
                    iconName: 'feedback',
                    route: '/home/products/bisheshchar'

                },
                {
                    displayName: 'পুরনো বই',
                    iconName: 'feedback',
                    route: '/home/products/bisheshchar'

                }
            ]
        },
        {
            displayName: 'স্টেশনারি',
            iconName: 'report_problem',
            children: [
                {
                    displayName: 'বিশেষ ছাড়',
                    iconName: 'group',
                    route: '/blog/blog-list'
                },
                {
                    displayName: 'নতুন স্টেশনারি',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                },
                {
                    displayName: 'আইডি ও ফিতা',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                },
                {
                    displayName: 'পেপার, খাতা, নোটবুক & ডাইরি',
                    iconName: 'feedback',
                    children: [
                        {
                            displayName: 'পেপার',
                            iconName: 'group',
                            route: '/blog/blog-list'
                        },
                        {
                            displayName: 'খাতা',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'নোটবুক',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'ডাইরি',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'Filtering by product category',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        }

                    ]
                },
                {
                    displayName: 'লেখার উপকরণ',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                },
                {
                    displayName: 'শিক্ষা উপকরণ',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                },
                {
                    displayName: 'অফিস সামগ্রী',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                },
                {
                    displayName: 'ডেক্স অর্গানাইজার',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                },
                {
                    displayName: 'ফাইলস ও ফোল্ডার',
                    iconName: 'speaker_notes',
                    route: '/blog/blog-column',
                }
            ]
        },
        {
            displayName: 'আর্ট & ক্রাফট',
            iconName: 'report_problem',
            children: [
                {
                    displayName: 'বিশেষ ছাড়',
                    iconName: 'group',
                    route: '/pages/about'
                },
                {
                    displayName: 'নতুন ক্রাফট',
                    iconName: 'speaker_notes',
                    route: '/pages/faq',
                },
                {
                    displayName: 'পেপার',
                    iconName: 'feedback',
                    children: [

                        {
                            displayName: 'গিফট কার্ড',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'হ্যান্ডমেইড ডাইরি',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'বুক মার্ক',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'গিফট বক্স',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'টিস্যু বক্স',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        }
                    ]
                },
                {
                    displayName: 'কাঠের পণ্য',
                    iconName: 'group',
                    children: [
                        {
                            displayName: 'ডাইরি',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'গিফট বক্স',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'নেইম প্লেট',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'টিস্যু বক্স',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'গহনার বক্স',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'ফ্রেম',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        },
                        {
                            displayName: 'চাবির রিং',
                            iconName: 'speaker_notes',
                            route: '/pages/faq',
                        }
                    ]
                },
                {
                    displayName: 'সিরামিক',
                    iconName: 'speaker_notes',
                    route: '/pages/compare',
                },
                {
                    displayName: 'মাটির তৈরি',
                    iconName: 'feedback',
                    children: [
                        {
                            displayName: 'ফুলদানি',
                            iconName: 'speaker_notes',
                            route: '/pages/compare',
                        },
                        {
                            displayName: 'টি সেট',
                            iconName: 'speaker_notes',
                            route: '/pages/compare',
                        },
                        {
                            displayName: 'ওয়াল হেঙ্গিং',
                            iconName: 'speaker_notes',
                            route: '/pages/compare',
                        }
                    ]
                },
                {
                    displayName: 'কাঠের গহনা',
                    iconName: 'group',
                    route: '/pages/cart'
                },
                {
                    displayName: 'ক্যান্ডেল',
                    iconName: 'speaker_notes',
                    route: '/pages/my-account',
                },
                {
                    displayName: 'পুঁতির পণ্য',
                    iconName: 'feedback',
                    children: [
                        {
                            displayName: 'ব্যাগ',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        },
                        {
                            displayName: 'টিস্যু বক্স',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        },
                        {
                            displayName: 'ডর বেল',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        },
                        {
                            displayName: 'ওয়াল হেঙ্গিং',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        }
                    ]
                },
                {
                    displayName: 'চামড়াজাত পণ্য',
                    iconName: 'feedback',
                    children: [
                        {
                            displayName: 'ব্যাগ',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        },
                        {
                            displayName: 'ব্যােল্ট',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        },
                        {
                            displayName: 'চাবির রিং',
                            iconName: 'speaker_notes',
                            route: '/pages/my-account',
                        }
                    ]
                }
            ]
        },
        {
            displayName: 'প্রাতিষ্ঠানিক অর্ডার',
            iconName: 'feedback',
            children: [

                {
                    displayName: 'কনফারেন্স',
                    iconName: 'speaker_notes',
                    route: '/pages/my-account',
                },
                {
                    displayName: 'সেমিনার',
                    iconName: 'speaker_notes',
                    route: '/pages/my-account',
                },
                {
                    displayName: 'প্রিন্টিং',
                    iconName: 'speaker_notes',
                    route: '/pages/my-account',
                }
            ]
        }
    ];

    //constructor(public router: Router, public sidenavMenuService: SidebarMenuService) {

    //    this.router.events.subscribe((event) => {
    //        if (event instanceof NavigationEnd) {
    //            this.url = event.url;
    //        }
    //    })
    //}

    //ngOnInit() {
    //    this.mainMenu = this.mainMenus[0];
    //    //this.flag = this.flags[0];
    //}


  //public changeLang(flag){
  //  this.flag = flag;
  //}


}








//navItems: SidenavMenu[] = [
//    {
//        displayName: 'করবী',
//        iconName: 'recent_actors',
//        route: '/home/products/all'
//    },
//    {
//        displayName: 'বই',
//        iconName: 'movie_filter',
//        children: [

//            {
//                displayName: 'বিশেষ ছাড়',
//                iconName: 'recent_actors',
//                route: '/home'
//            },
//            {

//                displayName: 'বিষয়',
//                iconName: 'group',
//                children: [
//                    {
//                        displayName: 'ছোটদের বই',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'English Fiction',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'Bangla Fiction',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'Bangla Nonfiction',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'অনুবাদ',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'মেডিকেল বুক',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'আইন বই',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'English Proficiency',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'বাংলায় ইঞ্জিনিয়ারিং',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'ইসলামিক বই',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'সফটওয়্যার ইঞ্জিনিয়ারিং',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'বিবিএ',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'এমবিএ',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'ইতিহাস',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'রান্না ও খাদ্য পুষ্টি',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'জীবনী',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'গণমাধ্যম ও সাংবাদিকতা',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'মুক্তিযুদ্ধ',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'গণিত',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'খেলাধুলা',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'শিক্ষা ও গবেষণা',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    },
//                    {
//                        displayName: 'ভর্তি, নিয়োগ ও পরীক্ষা প্রস্তুতি',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    }
//                    ,
//                    {
//                        displayName: 'আত্মউন্নয়ন, মোটিভেশনাল',
//                        iconName: 'person',
//                        route: 'bishoi',
//                    }
//                ]
//            },
//            {
//                displayName: 'লেখক',
//                iconName: 'speaker_notes',
//                children: [
//                    {
//                        displayName: 'হুমায়ুন আহমেদ',
//                        iconName: 'star_rate',
//                        route: 'lekhok'
//                    },
//                    {
//                        displayName: 'মুহম্মদ জাফর ইকবাল',
//                        iconName: 'star_rate',
//                        route: 'lekhok'
//                    },
//                    {
//                        displayName: 'সৈয়দ শামসুল হক',
//                        iconName: 'star_rate',
//                        route: 'my-ally-cli'
//                    },
//                    {
//                        displayName: 'জহির রায়হান',
//                        iconName: 'star_rate',
//                        route: 'become-angular-tailer'
//                    }
//                    ,
//                    {
//                        displayName: 'সমরেশ মজুমদার',
//                        iconName: 'star_rate',
//                        route: 'become-angular-tailer'
//                    }

//                ]
//            },
//            {
//                displayName: 'প্রকাশনী',
//                iconName: 'feedback',
//                children: [
//                    {
//                        displayName: 'অন্যপ্রকাশ	অন্যপ্রকাশ',
//                        iconName: 'star_rate',
//                        route: 'prokashoni'
//                    },
//                    {
//                        displayName: 'বাংলা একাডেমি',
//                        iconName: 'star_rate',
//                        route: 'what-up-web'
//                    },
//                    {
//                        displayName: 'বাতিঘর প্রকাশনী',
//                        iconName: 'star_rate',
//                        route: 'my-ally-cli'
//                    },
//                    {
//                        displayName: 'ইসলামিক ফাউন্ডেশন',
//                        iconName: 'star_rate',
//                        route: 'become-angular-tailer'
//                    }
//                ]
//            },
//            {
//                displayName: 'প্যাকেজ',
//                iconName: 'feedback',
//                route: '/home/products/bisheshchar'

//            },
//            {
//                displayName: 'জনপ্রিয় বই',
//                iconName: 'feedback',
//                route: '/home/products/bisheshchar'

//            },
//            {
//                displayName: 'নতুন প্রকাশিত বই',
//                iconName: 'feedback',
//                route: '/home/products/bisheshchar'

//            },
//            {
//                displayName: 'প্রি- অর্ডার বই',
//                iconName: 'feedback',
//                route: '/home/products/bisheshchar'

//            },
//            {
//                displayName: 'পুরনো বই',
//                iconName: 'feedback',
//                route: '/home/products/bisheshchar'

//            }
//        ]
//    },
//    {
//        displayName: 'স্টেশনারি',
//        iconName: 'report_problem',
//        children: [
//            {
//                displayName: 'বিশেষ ছাড়',
//                iconName: 'group',
//                route: '/blog/blog-list'
//            },
//            {
//                displayName: 'নতুন স্টেশনারি',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            },
//            {
//                displayName: 'আইডি ও ফিতা',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            },
//            {
//                displayName: 'পেপার, খাতা, নোটবুক & ডাইরি',
//                iconName: 'feedback',
//                children: [
//                    {
//                        displayName: 'পেপার',
//                        iconName: 'group',
//                        route: '/blog/blog-list'
//                    },
//                    {
//                        displayName: 'খাতা',
//                        iconName: 'speaker_notes',
//                        route: '/blog/blog-column',
//                    },
//                    {
//                        displayName: 'নোটবুক',
//                        iconName: 'speaker_notes',
//                        route: '/blog/blog-column',
//                    },
//                    {
//                        displayName: 'ডাইরি',
//                        iconName: 'speaker_notes',
//                        route: '/blog/blog-column',
//                    },
//                    {
//                        displayName: 'Filtering by product category',
//                        iconName: 'speaker_notes',
//                        route: '/blog/blog-column',
//                    }

//                ]
//            },
//            {
//                displayName: 'লেখার উপকরণ',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            },
//            {
//                displayName: 'শিক্ষা উপকরণ',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            },
//            {
//                displayName: 'অফিস সামগ্রী',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            },
//            {
//                displayName: 'ডেক্স অর্গানাইজার',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            },
//            {
//                displayName: 'ফাইলস ও ফোল্ডার',
//                iconName: 'speaker_notes',
//                route: '/blog/blog-column',
//            }
//        ]
//    },
//    {
//        displayName: 'আর্ট & ক্রাফট',
//        iconName: 'report_problem',
//        children: [
//            {
//                displayName: 'বিশেষ ছাড়',
//                iconName: 'group',
//                route: '/pages/about'
//            },
//            {
//                displayName: 'নতুন ক্রাফট',
//                iconName: 'speaker_notes',
//                route: '/pages/faq',
//            },
//            {
//                displayName: 'পেপার',
//                iconName: 'feedback',
//                children: [

//                    {
//                        displayName: 'গিফট কার্ড',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'হ্যান্ডমেইড ডাইরি',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'বুক মার্ক',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'গিফট বক্স',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'টিস্যু বক্স',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    }
//                ]
//            },
//            {
//                displayName: 'কাঠের পণ্য',
//                iconName: 'group',
//                children: [
//                    {
//                        displayName: 'ডাইরি',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'গিফট বক্স',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'নেইম প্লেট',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'টিস্যু বক্স',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'গহনার বক্স',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'ফ্রেম',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    },
//                    {
//                        displayName: 'চাবির রিং',
//                        iconName: 'speaker_notes',
//                        route: '/pages/faq',
//                    }
//                ]
//            },
//            {
//                displayName: 'সিরামিক',
//                iconName: 'speaker_notes',
//                route: '/pages/compare',
//            },
//            {
//                displayName: 'মাটির তৈরি',
//                iconName: 'feedback',
//                children: [
//                    {
//                        displayName: 'ফুলদানি',
//                        iconName: 'speaker_notes',
//                        route: '/pages/compare',
//                    },
//                    {
//                        displayName: 'টি সেট',
//                        iconName: 'speaker_notes',
//                        route: '/pages/compare',
//                    },
//                    {
//                        displayName: 'ওয়াল হেঙ্গিং',
//                        iconName: 'speaker_notes',
//                        route: '/pages/compare',
//                    }
//                ]
//            },
//            {
//                displayName: 'কাঠের গহনা',
//                iconName: 'group',
//                route: '/pages/cart'
//            },
//            {
//                displayName: 'ক্যান্ডেল',
//                iconName: 'speaker_notes',
//                route: '/pages/my-account',
//            },
//            {
//                displayName: 'পুঁতির পণ্য',
//                iconName: 'feedback',
//                children: [
//                    {
//                        displayName: 'ব্যাগ',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    },
//                    {
//                        displayName: 'টিস্যু বক্স',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    },
//                    {
//                        displayName: 'ডর বেল',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    },
//                    {
//                        displayName: 'ওয়াল হেঙ্গিং',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    }
//                ]
//            },
//            {
//                displayName: 'চামড়াজাত পণ্য',
//                iconName: 'feedback',
//                children: [
//                    {
//                        displayName: 'ব্যাগ',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    },
//                    {
//                        displayName: 'ব্যােল্ট',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    },
//                    {
//                        displayName: 'চাবির রিং',
//                        iconName: 'speaker_notes',
//                        route: '/pages/my-account',
//                    }
//                ]
//            }
//        ]
//    },
//    {
//        displayName: 'প্রাতিষ্ঠানিক অর্ডার',
//        iconName: 'feedback',
//        children: [

//            {
//                displayName: 'কনফারেন্স',
//                iconName: 'speaker_notes',
//                route: '/pages/my-account',
//            },
//            {
//                displayName: 'সেমিনার',
//                iconName: 'speaker_notes',
//                route: '/pages/my-account',
//            },
//            {
//                displayName: 'প্রিন্টিং',
//                iconName: 'speaker_notes',
//                route: '/pages/my-account',
//            }
//        ]
//    }
//];
