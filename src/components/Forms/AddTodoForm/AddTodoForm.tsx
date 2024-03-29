import React, { FC, useState, FormEvent } from 'react';
import { FormStyled } from './AddTodoForm.styled';
import { TextButton } from 'components/Buttons/TextButton';
import { ItemProps } from 'components/App/App';

interface TodoFormProps {
  onSubmit: (item: Partial<ItemProps>) => void;
}

interface TodoFormData {
  title: string;
  priority: string;
}

export const AddTodoForm: FC<TodoFormProps> = ({ onSubmit }) => {
  const initialFormData: TodoFormData = {
    title: '',
    priority: '1',
  };
  const [formData, setFormData] = useState<TodoFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[1-9]\d*$/.test(inputValue) || inputValue === '') {
      handleChange(e);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { title, priority } = formData;
    const trimmedTitle = title.trim();
    const trimmedPriority = priority.slice(0, 3);
    const newItem = { title: trimmedTitle, priority: trimmedPriority };
    onSubmit(newItem);
    setFormData(initialFormData);
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <input
        className="todo-form__input input--title"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
        placeholder="Title..."
      />

      <input
        className="todo-form__input input--priority"
        type="text"
        name="priority"
        value={formData.priority}
        onChange={handlePriorityChange}
        required
      />
      <TextButton label="Add" type="submit" />
    </FormStyled>
  );
};
