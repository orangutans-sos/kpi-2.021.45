import React from 'react';
import autoBind from 'react-autobind';
import KoboDropdown, {
  KoboDropdownThemes,
  KoboDropdownPlacements,
} from 'js/components/common/koboDropdown';
import ColumnsHideForm from 'js/components/submissions/columnsHideForm';
import './columnsHideDropdown.scss';

/**
 * A wrapper around KoboDropdown to be used atop table to bulk hide columns.
 *
 * @prop {object} asset
 * @prop {object[]} submissions
 * @prop {boolean} showGroupName
 * @prop {number} translationIndex
 */
class ColumnsHideDropdown extends React.Component {
  constructor(props){
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <KoboDropdown
        theme={KoboDropdownThemes.light}
        hideOnEsc
        hideOnMenuOutsideClick
        placement={KoboDropdownPlacements['down-left']}
        name='columns-hide-dropdown'
        triggerContent={
          <span className='columns-hide-dropdown-trigger'>
            <i className='k-icon k-icon-hide'/>
            {t('hide fields')}
          </span>
        }
        menuContent={
          <ColumnsHideForm {...this.props}/>
        }
      />
    );
  }
}

export default ColumnsHideDropdown;
