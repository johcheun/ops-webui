/*
 (C) Copyright 2015 Hewlett Packard Enterprise Development LP

    Licensed under the Apache License, Version 2.0 (the "License"); you may
    not use this file except in compliance with the License. You may obtain
    a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations
    under the License.
*/

let locale = null;
let msgs = null;

export function setLocale(l) {
  locale = l;
  msgs = locale && locale.MESSAGES;
}

export function getLocale() { return locale; }

export function t(k) { return (msgs && msgs[k]) || `~${k}~`; }

export function tf(v) { return t(v ? 'true' : 'false'); }

export function ed(v) { return t(v ? 'enabled' : 'disabled'); }

export function ud(v) { return t(v ? 'up' : 'down'); }
