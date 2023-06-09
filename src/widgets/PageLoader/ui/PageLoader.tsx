import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/components/Loader/Loader';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ className = '' }) => (
  <div className={classNames(cls.pageLoader, {}, [className])}>
    <Loader />
  </div>
);
