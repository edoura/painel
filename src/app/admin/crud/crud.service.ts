import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { CRUDBaseService } from 'src/app/shared/services/crud.base.service';

@Injectable()
export class CRUDService extends CRUDBaseService {

    constructor(protected db: AngularFireDatabase) {
        super(db, 'crud');
    }

}