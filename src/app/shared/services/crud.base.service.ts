import { AngularFireDatabase } from '@angular/fire/database';

export class CRUDBaseService {

    constructor(
        protected db: AngularFireDatabase, 
        protected path: string
    ) { }

    Add(obj: Object) {
        this.db.list(this.path).push(obj)
    }

    GetById(id: string) {
        return this.db.object(this.path + id);
    }

    GetsList() {
        return this.db.list(this.path);
    }

    Update(id: string, obj: Object) {
        this.db.object(this.path + id).update(obj)
    }

    Delete(id: string) {
        this.db.object(this.path + id).remove();
    }
}