export interface EntityFactory<TEntity> {
	find(): TEntity[] | Promise<TEntity[]>
	findOne(id: number | string): TEntity | Promise<TEntity>
	create(...args: any): TEntity | Promise<TEntity>
}
