import React from 'react';
import './EmployerCard.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  removeItem
} from '../../modules/Register/redux/actions/SuggestionManagement';
import { RootState } from '../../redux/reducers';
import {
  FAVORITE_EMPLOYERS_MAX_COUNT,
  GENDERS_ENUM,
  IMAGES_ENUM
} from '../../constants';
import {
  IEmployer,
  ISuggestionsReducerState
} from '../../modules/Register/interfaces';

interface IBoardProps {
  info: IEmployer;
  status: string;
  index: number;
}

const EmployerCard: React.FC<IBoardProps> = ({ info, status, index }) => {
  const dispatch = useDispatch();
  const { favorites }: ISuggestionsReducerState = useSelector(
    (state: RootState) => state.suggestions
  );

  const handleRemoveItem = (index?: number) => {
    dispatch(removeItem(index));
  };

  const handleAddItem = (index?: number) => {
    dispatch(addItem(index));
  };

  return status === 'empty' ? (
    <div className="cardEmpty">
      <img src={IMAGES_ENUM.EMPTY} alt="Avatar" />
    </div>
  ) : (
    <div className="card">
      <img
        src={`${
          info?.gender === GENDERS_ENUM.FEMALE
            ? IMAGES_ENUM.FEMALE
            : IMAGES_ENUM.MALE
        }`}
        alt="Avatar"
        style={{ width: '80px' }}
      />
      {status === 'favorites' && (
        <button className="removeBtn" onClick={() => handleRemoveItem(index)}>
          Delete
        </button>
      )}
      {status === 'suggestion' && (
        <button
          className={`${
            favorites.length >= FAVORITE_EMPLOYERS_MAX_COUNT
              ? 'disabledBtn'
              : 'addBtn'
          }`}
          disabled={favorites.length >= 5}
          onClick={() => {
            handleAddItem(index);
          }}
        >
          Add to favorites
        </button>
      )}
      <div className="container">
        <b>{`${info?.first_name} ${info?.last_name}`}</b>
        <div className="department">{info?.department}</div>
        <div className="job_title">{info?.job_title}</div>
      </div>
    </div>
  );
};

export default EmployerCard;
