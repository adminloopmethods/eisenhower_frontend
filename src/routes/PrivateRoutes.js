import React, { lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './RouteWithLayout';
import AuthLayout from '../components/layout/AuthLayout';
const PrivateRoutes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={lazy(() => import('../components/dashboard/Dashboard'))}
        exact
        layout={AuthLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/topic/TopicList'))}
        exact
        layout={AuthLayout}
        path="/topic-list"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/topic/AddTopic'))}
        exact
        layout={AuthLayout}
        path="/add-topic"
      />

      <RouteWithLayout
        component={lazy(() => import('../components/dashboard/TaskType'))}
        exact
        layout={AuthLayout}
        path="/add-task-type"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/Profile'))}
        exact
        layout={AuthLayout}
        path="/profile"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/topic/AddTopic'))}
        exact
        layout={AuthLayout}
        path="/add-topic"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/topic/TopicList'))}
        exact
        layout={AuthLayout}
        path="/topic-list"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/department/AddDepartment'))}
        exact
        layout={AuthLayout}
        path="/add-department"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/department/DepartmentList'))}
        exact
        layout={AuthLayout}
        path="/department-list"
      />
      {/* members */}
      <RouteWithLayout
        component={lazy(() => import('../components/member/AddMember'))}
        exact
        layout={AuthLayout}
        path="/add-member"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/member/MemberList'))}
        exact
        layout={AuthLayout}
        path="/member-list"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/member/MemberDetails'))}
        exact
        layout={AuthLayout}
        path="/member-details"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/tasks/AddTaskStepOne'))}
        exact
        layout={AuthLayout}
        path="/add-task"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/tasks/AddTaskStepTwo'))}
        exact
        layout={AuthLayout}
        path="/add-task-step-2"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/tasks/Tasklist'))}
        exact
        layout={AuthLayout}
        path="/task-list"
      />
      <RouteWithLayout
        component={lazy(() => import('../components/tasks/TaskDetails'))}
        exact
        layout={AuthLayout}
        path="/task-details"
      />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
};

export default PrivateRoutes;
