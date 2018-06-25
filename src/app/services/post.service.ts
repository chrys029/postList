import{ Subject } from 'rxjs';
import { Post } from "../models/Post.model";
import { forEach } from '@angular/router/src/utils/collection';

export class PostService {

  private post : Post[] =[];
  private id= 4;
  postSubject = new Subject<any[]>();

  emitPostSubject() {
    let i=0;
    this.posts.forEach(element => {
      element.id=i;
      i=i+1;
    });
    this.postSubject.next(this.posts.slice());
  }

  


  addPost(post: Post){
    this.posts.push(post);
    this.emitPostSubject();
  }

  deletePost(postEncours: Post){
    console.log(postEncours.id);
    this.posts.splice(postEncours.id,1);
    this.emitPostSubject();
        
  }

  getNewId(){
    return this.id+1;
  }


  private posts: Post[] = [
    new Post(1, 'Post 1', 'Détruisez-les sans faire aucun mouvement. Pensions accordées aux gens de chez nous, a répondu. Jadis l\'âme regardait le corps avec la pointe.', 10, '10/10/2016', 'sup'),
    new Post(2, 'Post 2','Incontestablement, c\'était avant tout un astrophysicien. Épuisés comme nous l\'avons reposée sur la couverture paroisse en feu tout à côté de nous. Faut-il le maudire ce jour où, voulant indiquer que c\'est quelqu\'un de malade sans doute. ', 4,'10/10/2016','sup'),
    new Post(3,'Post 3','Incontestablement, c\'était avant tout un astrophysicien. Épuisés comme nous l\'avons reposée sur la couverture paroisse en feu tout à côté de nous. Faut-il le maudire ce jour où, voulant indiquer que c\'est quelqu\'un de malade sans doute. ',0, '03/07/2017',''),
    new Post(4,'Post 4', 'Même encore, l\'abomination de cette terre, il l\'amena dans une grande charrette encombrée de légumes et de fruits que je lui écrivais que je ne tenterai rien moins que la nécessité, l\'oppression. Charmé d\'un si pesant sommeil, que de devenir solennel et vert et jaune, l\'air superbe, en gaillard très fort qui ne défaille dans l\'immensité de l\'océan rejoint à la fenêtre cintrée. Doucement, il faut cette fois-ci.  ',-10,'10/10/2015','inf')
];



}