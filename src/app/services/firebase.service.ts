// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Contact } from '../models/contact.model';
// import { getDocs, collection, getFirestore } from 'firebase/firestore';
// import { initializeApp } from 'firebase/app';
// import { environment } from 'src/environments/environment';
// import { Database, set, ref, update } from '@angular/fire/database';
// import { PlayService } from './play.service';
// import { lastValueFrom } from 'rxjs';
// import { onValue } from 'firebase/database';


// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {

//   constructor(private httpClient: HttpClient, public dataBase: Database, private playService: PlayService) { }
//   app = initializeApp(environment.firebase)
//   db = Database

//   saveUsers(user) {
//     this.httpClient
//       .post('https://play-55b86-default-rtdb.europe-west1.firebasedatabase.app/users.json', user)
//       .subscribe(res => {
//         console.log(res);

//       })
//   }
//   getUsers() {
//     // this.query('users')
//     // this.httpClient
//     //   .get('https://play-55b86-default-rtdb.europe-west1.firebasedatabase.app/users/-N0zESCxuuTUCKVSkGj0.json')
//     //   .subscribe(res => {
//     //     console.log(res);

//     //     // var r: any = JSON.parse(JSON.stringify(res))
//     //     // var r: any = JSON.stringify(res)
//     //     // console.log(r);
//     //     // // r.key = ''
//     //     // for (const re in r) {
//     //     //   // console.log(re);

//     //     // }

//     //   })
//   }
//   async query() {
//     // var res
//     return new Promise((resolve, reject) => {

//       const starCountRef = ref(this.dataBase, 'users/');
//       onValue(starCountRef, (snapshot) => {
//         const data = snapshot.toJSON();
//         // console.log(data['5a566402a6499c1d4da9220a']);
//         const users = []
//         for (var user in data) {
//           users.push(data[user])
//         }
//         resolve(users)
//         // res = data
//       });
//     })
//     // console.log(res);

//     // await this.playService.getPlays()
//     // this.playService.query()
//     // const res = await lastValueFrom(this.playService.spPlaylists$)
//     // console.log();

//     // this.playService.spPlaylists$.subscribe(res => {
//     //   update(ref(this.dataBase, 'users/' + 'nTW0Z4E8E6eRCzRpGD2m76Wl'), {
//     //     spPlaylists: res,
//     //   });
//     // })
//     // this.playService.ytPlaylists$.subscribe(res => {
//     //   update(ref(this.dataBase, 'users/' + 'nTW0Z4E8E6eRCzRpGD2m76Wl'), {
//     //     ytPlaylists: res,
//     //   });
//     // })

//     // this.ytPlaylists$ = this.playService.ytPlaylists$
//     // this.spPlaylists$ = this.playService.spPlaylists$
//     // const res = await lastValueFrom(this.playService.spPlaylists$)
//     // console.log('hi');

//     // user.spPlaylists = 
//     // const { _id, name, phone, password, email, spPlaylists, ytPlaylists, shares } = user
//   }

//   // async getEntityById(collectionName, entityId) {
//   //   const docRef = doc(db, collectionName, entityId)
//   //   const docSnap = await getDoc(docRef)

//   //   if (docSnap.exists()) {
//   //     return { _id: entityId, ...docSnap.data() }
//   //   } else {
//   //     console.log('No such document!')
//   //   }
//   // }

//   // async saveEntity(collectionName, entity) {
//   //   if (entity._id) {
//   //     const entityRef = doc(db, collectionName, entity._id)
//   //     delete entity._id
//   //     await updateDoc(entityRef, entity)
//   //   } else {
//   //     await addDoc(collection(db, collectionName), {
//   //       ...entity,
//   //       createdAt: serverTimestamp(),
//   //     })
//   //   }
//   // }

//   // async removeEntity(collectionName, entityId) {
//   //   await deleteDoc(doc(db, collectionName, entityId))
//   // }

// }
