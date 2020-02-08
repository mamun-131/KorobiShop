import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from  '@angular/router';
import { ProductService } from '../../shared/services/product.service';


@Component({
    selector: 'app-menu-extension',
    templateUrl: './menu-extension.component.html',
    styleUrls: ['./menu-extension.component.sass']
})
export class MenuExtensionComponent implements OnInit {
    commenList: any = {};

    listTitle: string;
    constructor(private router: Router, private productService: ProductService , private route: ActivatedRoute) {
        this.route.params.subscribe(
            (params: Params) => {
                const category = params['category'];


                if (category == 'publisher') {
                this.productService.getAllPublishers()
                    .subscribe(
                        (publisher: any) => {
                            this.commenList = publisher;
                            console.log(publisher);
                            this.listTitle = 'Publisher List:';
                        }
                );
                }
                if (category == 'writer') {
                    this.productService.getAllWriters()
                        .subscribe(
                            (writer: any) => {
                                this.commenList = writer;
                                console.log(writer);
                                this.listTitle = 'Writer List:';
                            }
                        );
                }


            });
    }

    ngOnInit() {

    }


}
