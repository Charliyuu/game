import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  

  constructor(private firestore: AngularFirestore) { }
  getgame(): Observable<any[]> {
    return this.firestore.collection('personajes').valueChanges({ idField: 'id' });
  }
  getdetalle(id: string): Observable<any> {
    return this.firestore.collection('personajes').doc(id).valueChanges();
  }
  
}
