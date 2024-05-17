export class ProductModelMock {
    // Mock implementation of ProductModel methods
  }
  
  export class ProductServiceMock {
    async findAll() {
      // Mock implementation of findAll method
      return [{ id: 1, name: 'Product 1' }];
    }
  
    async findById(id: string) {
      // Mock implementation of findById method
      return { id: 1, name: 'Product 1' };
    }
  
    async create(productData: any) {
      // Mock implementation of create method
      return { id: 2, ...productData };
    }
  
    async update(id: string, productData: any) {
      // Mock implementation of update method
      return { id, ...productData };
    }
  
    async delete(id: string) {
      // Mock implementation of delete method
      return { id, message: 'Deleted' };
    }
  }
  