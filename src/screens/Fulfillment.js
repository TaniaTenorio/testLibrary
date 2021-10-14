import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {font} from '../../res';
import {
  FulfillmentHeader,
  FulfillmentGraphics,
  WarningBar,
  RewardLevels,
  RewardsModal,
} from '@zubale/app-components';

const WEEKDATA = [
  {
    weekday: 'mon',
    date: 11,
    totalTasks: 10,
    completedTasks: 10,
    unfulfilledTasks: 0,
  },
  {
    weekday: 'tue',
    date: 12,
    totalTasks: 12,
    completedTasks: 0,
    unfulfilledTasks: 12,
  },
  {
    weekday: 'wed',
    date: 13,
    totalTasks: 8,
    completedTasks: 4,
    unfulfilledTasks: 4,
  },
  {
    weekday: 'thu',
    date: 14,
    totalTasks: 15,
    completedTasks: 11,
    unfulfilledTasks: 4,
  },
  {
    weekday: 'fri',
    date: 15,
    totalTasks: 6,
    completedTasks: 1,
    unfulfilledTasks: 5,
  },
  {
    weekday: 'sat',
    date: 16,
    totalTasks: 5,
    completedTasks: 2,
    unfulfilledTasks: 3,
  },
  {
    weekday: 'sun',
    date: 17,
    totalTasks: 0,
    completedTasks: 0,
    unfulfilledTasks: 0,
  },
];

const LEVELDATA = [
  {
    rewardLevel: 'GOLD',
    reservationsAvailable: 12,
    requirements: 'En los últimos 7 días debes reservar y completar 16 tareas',
    compliance: 'Tu cumplimiento debe ser mayor al 90%',
  },
  {
    rewardLevel: 'SILVER',
    reservationsAvailable: 8,
    requirements: 'En los últimos días debes reservar y completar 8 tareas',
    compliance: 'Tu cumplimiento debe ser mayor al 80%',
  },
  {
    rewardLevel: 'BRONZE',
    reservationsAvailable: 4,
    requirements: 'En los últimos días 7 Tu cumplimiento debe ser mayor al 70%',
    compliance: 'Probando, probando',
  },
];

const rewardLevel = 'BLOCKED';

const Fulfillment = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <View style={{flex: 1}}>
      <FulfillmentHeader
        rewardLevel={rewardLevel}
        startDate={'12/05'}
        endDate={'18/05'}
        completedTasks={28}
        unfulfilledTasks={28}
        fulfillmentRate={50}
        textFont={font.AppRegular}
        valueFont={font.AppBold}
      />
      {rewardLevel === 'BLOCKED' && (
        <WarningBar
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          rewardLevel={rewardLevel}
          reactivationDay={'domingo'}
          reactivationTime={'9:00 p.m.'}
        />
      )}
      <ScrollView>
        <FulfillmentGraphics
          weekData={WEEKDATA}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
        />
        {rewardLevel !== 'BLOCKED' && (
          <WarningBar
            regularFont={font.AppRegular}
            boldFont={font.AppBold}
            rewardLevel={rewardLevel}
          />
        )}
        <RewardLevels
          levelData={LEVELDATA}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
        />
      </ScrollView>
      {visibility && (
        <RewardsModal
          rewardLevel={rewardLevel}
          status={'BLOCKED'}
          limitOfBookings={12}
          regularFont={font.AppRegular}
          boldFont={font.AppBold}
          handleTextButton={type => console.log(type)}
          handleCloseButton={() => setVisibility(false)}
        />
      )}
    </View>
  );
};

export default Fulfillment;
