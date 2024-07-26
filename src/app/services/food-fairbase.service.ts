import { inject, Injectable } from '@angular/core';
import { collectionData, doc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, query, setDoc, where } from 'firebase/firestore';
import { from, Observable, tap } from 'rxjs';
import { IFood } from '../interfaces/foodInterface';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})

export class FoodFairbaseService {
  firestore = inject(Firestore)
  foodCollection = collection(this.firestore, 'food');
  auth = inject(Auth)


  getFood():Observable<IFood[]>{
    const user = this.auth.currentUser;
    const queryId = query(this.foodCollection, where('uid', '==', user!.uid))
    return collectionData(queryId, {idField : 'id'}) as Observable<IFood[]> 
  }

  addFood(name: string, count: number): Observable<string>{
    const user = this.auth.currentUser;
    const foodCreate = {name, count, uid: user!.uid}
    const promise = addDoc(this.foodCollection, foodCreate)
    .then(
      (response) => response.id
    );
    return from(promise);
  
  }

  deleteFood(id: string): Observable<void>{
    const docRef = doc(this.firestore, 'food/' + id);
    const promise = deleteDoc(docRef);
    return from(promise);
  }

    updateFood(
      id: string,
       dataToUpdate: {name: string, count: number}
      ): Observable<void>{
      const docRef = doc(this.firestore, 'food/' + id);
      const promise = setDoc(docRef, dataToUpdate)
      return from(promise);
    }
  }
  

