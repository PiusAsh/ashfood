export interface Menu {
  id: Number;
  menuName: string;
  menuDetails: MenuDetails[];
}

export class MenuDetails
{
  name!: string;
  price!: string;
  imageUrl!: string;
  description!: string;
}
