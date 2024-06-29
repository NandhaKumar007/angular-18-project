import { Component, signal } from '@angular/core';
import { injectMutation, injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { ApiService } from '../../services/api.service';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-enquiries',
  standalone: true,
  imports: [SharedModule, HttpClientModule],
  templateUrl: './enquiries.component.html',
  styleUrl: './enquiries.component.scss'
})
export class EnquiriesComponent {

constructor(public api:ApiService){}

query = injectQuery(() => ({
  queryKey: ['todos'],
  queryFn: () => this.api.getTodos(),
}))

mutation = injectMutation((client) => ({
  mutationFn: (todo: any) => this.api.addTodo(todo),
  onSuccess: () => {
    // Invalidate and refetch by using the client directly
    client.invalidateQueries({ queryKey: ['todos'] })
  },
}))

onAddTodo() {
  this.mutation.mutate({
    id: Date.now().toString(),
    title: 'Do Laundry',
  })
}
// query = this.apiService.InjectQuery(
//   "products-unit",
//   [{}, "get", `products/unit_category_type_list`],
//   {
//     onSuccessCallBack: (res:any) => {
//       console.log(res);
//     },
//   }
// );
}
