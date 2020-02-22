import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarMenuService } from '../shared/sidebar/sidebar-menu.service';
import { SidenavMenu } from '../shared/sidebar/sidebar-menu.model';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../shared/services/cart.service';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';
import { AppService } from '../../app.service';

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
    nameM: string;
    nameN: string;
    subscription;
    constructor(public router: Router, public sidenavMenuService: SidebarMenuService,
        private cartService: CartService, private userService: UserService, private appService: AppService) {

      //  this.nameM = this.userService.currentLoginStatus;
      //  console.log(this.nameM);
        this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.url = event.url;
            }
        });

 
    }

    ngOnInit(): void {

       
        this.appService.getST().subscribe(res => {
            this.nameM = res;
        });
 }

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
    doSearch(searchValue: string) {
        this.router.navigate(['/home/products/search-' + this.mainMenu + '-' + searchValue]);
    }


    public changeMainMenu(mainMenu) {
        this.mainMenu = mainMenu;
        console.log(this.mainMenu);
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
                            displayName: 'আত্মউন্নয়ন, মোটিভেশনাল',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ইসলামিক বই',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ভর্তি, নিয়োগ ও পরীক্ষা প্রস্তুতি',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'গণিত, বিজ্ঞান ও প্রযুক্তি',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ইঞ্জিনিয়ারিং',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'আইন ও বিচার',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'সাহিত্য',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'শিক্ষা ও গবেষণা',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'অনুবাদ',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ইতিহাস',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'গণমাধ্যম ও সাংবাদিকতা',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'রান্না ও খাদ্য পুষ্টি',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'ভাষা ও অভিধান',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'English Proficiency',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'খেলাধুলা',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'স্বাস্থ্য, পরিচর্যা ও রোগ নিরাময়',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'মুক্তিযুদ্ধ',
                            iconName: 'person',
                            route: 'bishoi',
                        },
                        {
                            displayName: 'জীবনী',
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
                            displayName: 'মেডিকেল',
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
            displayName: 'ইলেকট্রনিক্স ',
            iconName: 'electronics',
            children: [
                {
                    displayName: 'কম্পিউটার',
                    iconName: 'computer',
                    children: [
                        {
                            displayName: 'বিশেষ ছাড়',
                            iconName: 'group',
                            route: '/blog/blog-list'
                        },
                        {
                            displayName: 'পেন ড্রাইভ   ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'কি বোর্ড   ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'মাউস ও মাউস প্যাড    ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'পোর্টেবল হার্ডডিস্ক ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'USB হাব  ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'লেসার টোনার   ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'লেসার টোনার ইংক  ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'কার্টিজ ইংক ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'ক্যাবল  ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        }

                    ]
                },
                {
                    displayName: 'মোবাইল সামগ্রী',
                    iconName: 'speaker_notes',
                    children:[
                        {
                            displayName: 'বিশেষ ছাড়',
                            iconName: 'group',
                            route: '/blog/blog-list'
                        },
                        {
                            displayName: 'হেডফোন   ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        },
                        {
                            displayName: 'এডাপ্টার ',
                            iconName: 'speaker_notes',
                            route: '/blog/blog-column',
                        }

                    ]
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

                    ]
                },
                {
                    displayName: 'চামড়াজাত পণ্য',
                    iconName: 'feedback',
                    children: [

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
            displayName: 'ছেলে/ছেলেদের শপিং',
            iconName: '',
            children: [
                {

                    displayName: 'পোশাক',
                    iconName: '',
                    children: [
                        {
                            displayName: 'টি-শার্ট',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ড্রেস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'জিন্স',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'শার্ট',
                            iconName: '',
                            route: ''
                        },

                        {
                            displayName: 'কোট এন্ড জ্যাকেট',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'প্যান্টস',
                            iconName: '',
                            route: ''
                        }
                    ]
                },

                {
                    displayName: 'জুতা ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'ডিজাইনার জুতা ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ড্রেস জুতা ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'সেন্ডেল',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'স্লিপার্স',
                            iconName: '',
                            route: ''
                        }
                        ,
                        {
                            displayName: 'স্নিকার্স',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'জুয়েলারি এন্ড ওয়াচ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'ওয়াচ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ওয়াচ বক্স',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'বিউটি',
                    iconName: '',
                    children: [
                        {
                            displayName: 'স্কিন কেয়ার',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ফ্রাগ্রন্স',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'বাথ এন্ড বডি',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'হেয়ার কেয়ার',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'ব্যাগ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'ব্যাকপ্যাকস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'বেল্ট ব্যাক এন্ড ফ্যানি প্যাক',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ক্রসবডি ব্যাগ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'স্ট্যাটাচ্যালস এন্ড টপ হ্যান্ডেল',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'সোল্ডার ব্যাগ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ওয়ালেট',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'এক্সেসরিজ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'বেল্ট',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ক্যাপ, হ্যাট',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'চশমা',
                    iconName: '',
                    children: [
                        {
                            displayName: 'সানগ্লাস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'প্রেস্ক্রিপশন গ্লাসস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'লেন্স',
                            iconName: '',
                            route: ''
                        }
                    ]
                }
            ]
        },
        {
            displayName: 'মেয়ে/মেয়েদের শপিং',
            iconName: '',
            children: [
                {

                    displayName: 'পোশাক',
                    iconName: '',
                    children: [

                        {
                            displayName: 'ড্রেস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'জিন্স',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'শার্ট',
                            iconName: '',
                            route: ''
                        },
                        ,
                        {
                            displayName: 'কোট এন্ড জ্যাকেট',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'প্যান্টস এন্ড ল্যাগিনস',
                            iconName: '',
                            route: ''
                        }
                        ,
                        {
                            displayName: 'আন্ডার গার্মেন্টস এন্ড শকস',
                            iconName: '',
                            route: ''
                        }
                    ]
                },

                {
                    displayName: 'জুতা ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'ডিজাইনার জুতা ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ড্রেস জুতা ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'সেন্ডেল',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'স্লিপার্স',
                            iconName: '',
                            route: ''
                        }
                        ,

                    ]
                },
                {
                    displayName: 'জুয়েলারি এন্ড ওয়াচ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'জুয়েলারি',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ফাইন জুয়েলারি',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ওয়াচ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'জুয়েলারি এন্ড ওয়াচ বক্স',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'বিউটি',
                    iconName: '',
                    children: [
                        {
                            displayName: 'স্কিন কেয়ার',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ফ্রাগ্রন্স',
                            iconName: '',
                            route: ''
                        },

                        {
                            displayName: 'মেকআপ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'বাথ এন্ড বডি',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'হেয়ার কেয়ার',
                            iconName: '',
                            route: ''
                        },

                        {
                            displayName: 'নেইলস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'টুলস ব্রাসেস',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'ব্যাগ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'ব্যাকপ্যাকস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'বেল্ট ব্যাক এন্ড ফ্যানি প্যাক',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ক্রসবডি ব্যাগ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'স্ট্যাটাচ্যালস এন্ড টপ হ্যান্ডেল',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'সোল্ডার ব্যাগ',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'Totes',
                            iconName: '',
                            route: ''
                        },

                        {
                            displayName: 'রিচলেটস',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'এক্সেসরিজ',
                    iconName: '',
                    children: [
                        {
                            displayName: 'বেল্ট',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'ক্যাপ, হ্যাট',
                            iconName: '',
                            route: ''
                        }
                    ]
                },
                {
                    displayName: 'চশমা',
                    iconName: '',
                    children: [
                        {
                            displayName: 'সানগ্লাস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'প্রেস্ক্রিপশন গ্লাসস',
                            iconName: '',
                            route: ''
                        },
                        {
                            displayName: 'লেন্স',
                            iconName: '',
                            route: ''
                        }
                    ]
                }
            ]
        },
        {
            displayName: 'ছোট বাচ্চাদের শপিং',
            iconName: '',
            children: [
                {
                    displayName: 'খেলনা',
                    iconName: '',
                    route: ''
                },
                {
                    displayName: 'পোশাক',
                    iconName: '',
                    route: ''
                },
                {
                    displayName: 'জুতা ',
                    iconName: '',
                    route: ''
                }

            ]
        },

        {
            displayName: 'হোম অ্যান্ড কিচেন',
            iconName: '',
            route: ''
        },
        {
            displayName: 'মেডিসিন',
            iconName: '',
            route: ''
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
