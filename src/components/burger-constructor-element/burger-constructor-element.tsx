import { FC } from 'react';
import styles from './burger-constructor-element.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDrag, useDrop } from "react-dnd";
import { moveIngredient } from "../../services/actions/burger-constructor";
import { useDispatch  } from '../../services/hooks';
import { useRef } from "react";
import { TBurgerConstructorElement  } from '../../services/types/types';

export const BurgerConstructorElement: FC<TBurgerConstructorElement> = ({ deleteElement, element, id, index }) => {

    const ref = useRef(null)
    const dispatch = useDispatch()

    const moveCard = (start: number, end: number) => {
        dispatch(moveIngredient(start, end))
    }

    const [, drop] = useDrop({
        accept: 'item',

        hover(item: { index: number }, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index
            // Не заменяйте предметы самими собой
            if (dragIndex === hoverIndex) {
                return
            }
            // Определите прямоугольник на экране
            const rect: HTMLElement = ref.current
            const hoverBoundingRect = rect?.getBoundingClientRect()
            // Получить вертикальную середину
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            //Определение положения мыши
            const clientOffset = monitor.getClientOffset()
            // Переместите пиксели наверх
            const hoverClientY = clientOffset!.y - hoverBoundingRect.top
            //Выполняйте перемещение только тогда, когда мышь пересекла половину высоты элементов
            // При перетаскивании вниз перемещайтесь только тогда, когда курсор находится ниже 50%
            // При перетаскивании вверх перемещайтесь только тогда, когда курсор находится выше 50%

            // Перетаскивание вниз
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
            // Перетаскивание вверх
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }
            // Фактическое выполнение действия
            moveCard(dragIndex, hoverIndex)
            // Примечание: здесь мы изменяем элемент монитора!
            // Как правило, лучше избегать мутаций,
            // но здесь это хорошо ради производительности
            // чтобы избежать дорогостоящего поиска по индексам.
            item.index = hoverIndex
        },
    })
    const [, drag] = useDrag({
        type: 'item',
        item: () => {
            return { id, index }
        },
    })
    drag(drop(ref))

    return (
        <li className={styles.constructor_element} key={element.id} ref={ref}>
            <DragIcon type="primary" />
            <ConstructorElement
                handleClose={() => deleteElement(element)}
                text={element.name}
                price={element.price}
                thumbnail={element.image}
            />
        </li>
    )
}
