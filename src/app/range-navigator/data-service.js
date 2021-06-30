/**
 * Chart data service
 */
export function GetDateTimeData(start, end, min, max, inc) {
    var series1 = [];
    var point = {};
    var value = 100;
    var date;
    inc = inc ? inc : 1;
    for (var i = 0; start <= end; i += inc) {
        date = start.getTime();
        if (min || max) {
            value = getRandomInt(min, max);
        }
        else {
            if (Math.random() > .5) {
                value += Math.random();
            }
            else {
                value -= Math.random();
            }
        }
        point = { x: new Date(date), y: value };
        new Date(start.setDate(start.getDate() + 1));
        series1.push(point);
    }
    return series1;
}
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function GetNumericData(start, end, min, max) {
    var series1 = [];
    var point = {};
    var value = 30;
    for (var i = start; i <= end; i++) {
        if (min || max) {
            value = getRandomInt(min, max);
        }
        else {
            if (Math.random() > .5) {
                value += Math.random();
            }
            else {
                value -= Math.random();
            }
        }
        point = { x: i, y: Math.round(value) };
        series1.push(point);
    }
    return series1;
}
export var dataCollection = [
    { xDate: new Date('2013-01-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },
    { xDate: new Date('2013-01-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },
    { xDate: new Date('2013-01-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },
    { xDate: new Date('2013-01-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },
    { xDate: new Date('2013-01-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },
    { xDate: new Date('2013-01-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },
    { xDate: new Date('2013-01-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },
    { xDate: new Date('2013-01-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },
    { xDate: new Date('2013-01-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },
    { xDate: new Date('2013-01-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },
    { xDate: new Date('2013-01-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },
    { xDate: new Date('2013-01-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },
    { xDate: new Date('2013-01-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },
    { xDate: new Date('2013-01-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },
    { xDate: new Date('2013-01-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },
    { xDate: new Date('2013-02-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },
    { xDate: new Date('2013-02-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },
    { xDate: new Date('2013-02-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },
    { xDate: new Date('2013-02-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },
    { xDate: new Date('2013-02-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },
    { xDate: new Date('2013-02-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },
    { xDate: new Date('2013-02-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },
    { xDate: new Date('2013-02-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },
    { xDate: new Date('2013-02-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },
    { xDate: new Date('2013-02-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },
    { xDate: new Date('2013-02-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },
    { xDate: new Date('2013-02-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },
    { xDate: new Date('2013-02-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },
    { xDate: new Date('2013-02-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },
    { xDate: new Date('2013-03-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },
    { xDate: new Date('2013-03-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },
    { xDate: new Date('2013-03-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },
    { xDate: new Date('2013-03-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },
    { xDate: new Date('2013-03-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },
    { xDate: new Date('2013-03-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },
    { xDate: new Date('2013-03-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },
    { xDate: new Date('2013-03-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },
    { xDate: new Date('2013-03-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },
    { xDate: new Date('2013-03-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },
    { xDate: new Date('2013-03-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },
    { xDate: new Date('2013-03-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },
    { xDate: new Date('2013-03-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },
    { xDate: new Date('2013-03-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },
    { xDate: new Date('2013-03-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },
    { xDate: new Date('2013-04-01'), Open: 86.1, High: 86.15, Low: 85.9, Close: 86.03 },
    { xDate: new Date('2013-04-03'), Open: 85.93, High: 86.17, Low: 85.84, Close: 86.02 },
    { xDate: new Date('2013-04-05'), Open: 85.74, High: 86, Low: 85.66, Close: 86 },
    { xDate: new Date('2013-04-07'), Open: 85.71, High: 85.71, Low: 85.36, Close: 85.62 },
    { xDate: new Date('2013-04-09'), Open: 85.3, High: 85.92, Low: 85.16, Close: 85.8 },
    { xDate: new Date('2013-04-11'), Open: 84.23, High: 85.46, Low: 84.23, Close: 85.2 },
    { xDate: new Date('2013-04-13'), Open: 84.51, High: 84.54, Low: 84.19, Close: 84.3 },
    { xDate: new Date('2013-04-15'), Open: 84.44, High: 84.65, Low: 84.2, Close: 84.63 },
    { xDate: new Date('2013-04-17'), Open: 84.6, High: 84.81, Low: 84.59, Close: 84.65 },
    { xDate: new Date('2013-04-19'), Open: 84.52, High: 84.86, Low: 84.4, Close: 84.76 },
    { xDate: new Date('2013-04-21'), Open: 84.17, High: 84.66, Low: 84.16, Close: 84.47 },
    { xDate: new Date('2013-04-23'), Open: 84.22, High: 84.3, Low: 83.98, Close: 84.26 },
    { xDate: new Date('2013-04-25'), Open: 83.75, High: 84.1, Low: 83.65, Close: 84 },
    { xDate: new Date('2013-04-27'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },
    { xDate: new Date('2013-04-29'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },
    { xDate: new Date('2013-05-01'), Open: 84.3, High: 84.45, Low: 84.19, Close: 84.22 },
    { xDate: new Date('2013-05-03'), Open: 83.79, High: 84.19, Low: 83.7, Close: 84.04 },
    { xDate: new Date('2013-05-05'), Open: 84.02, High: 84.02, Low: 83.69, Close: 83.71 },
    { xDate: new Date('2013-05-07'), Open: 84.01, High: 84.04, Low: 83.82, Close: 83.96 },
    { xDate: new Date('2013-05-09'), Open: 83.9, High: 84.02, Low: 83.86, Close: 83.94 },
    { xDate: new Date('2013-05-11'), Open: 84.09, High: 84.17, Low: 83.9, Close: 84.06 },
    { xDate: new Date('2013-05-13'), Open: 83.89, High: 84.25, Low: 83.77, Close: 84.01 },
    { xDate: new Date('2013-05-15'), Open: 84.05, High: 84.14, Low: 83.84, Close: 83.91 },
    { xDate: new Date('2013-05-17'), Open: 84.49, High: 84.65, Low: 84.18, Close: 84.22 },
    { xDate: new Date('2013-05-19'), Open: 84.99, High: 85.1, Low: 84.37, Close: 84.43 },
    { xDate: new Date('2013-05-21'), Open: 84.96, High: 85.06, Low: 84.7, Close: 85.01 },
    { xDate: new Date('2013-05-23'), Open: 84.68, High: 84.9, Low: 84.65, Close: 84.76 },
    { xDate: new Date('2013-05-25'), Open: 84.35, High: 85.03, Low: 84.32, Close: 84.67 },
    { xDate: new Date('2013-05-27'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },
    { xDate: new Date('2013-05-29'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },
    { xDate: new Date('2013-06-01'), Open: 84.2, High: 84.29, Low: 84.04, Close: 84.15 },
    { xDate: new Date('2013-06-03'), Open: 84.21, High: 84.25, Low: 84.03, Close: 84.17 },
    { xDate: new Date('2013-06-05'), Open: 84.72, High: 84.87, Low: 84.44, Close: 84.49 },
    { xDate: new Date('2013-06-07'), Open: 84.85, High: 84.88, Low: 84.5, Close: 84.72 },
    { xDate: new Date('2013-06-09'), Open: 84.53, High: 84.74, Low: 84.25, Close: 84.69 },
    { xDate: new Date('2013-06-11'), Open: 84.4, High: 84.7, Low: 84.27, Close: 84.52 },
    { xDate: new Date('2013-06-13'), Open: 84.96, High: 85.07, Low: 84.5, Close: 84.57 },
    { xDate: new Date('2013-06-15'), Open: 85.28, High: 85.32, Low: 84.95, Close: 85.03 },
    { xDate: new Date('2013-06-17'), Open: 85.35, High: 85.39, Low: 85.1, Close: 85.32 },
    { xDate: new Date('2013-06-19'), Open: 85.65, High: 85.66, Low: 85.21, Close: 85.36 },
    { xDate: new Date('2013-06-21'), Open: 85.38, High: 85.85, Low: 85.25, Close: 85.67 },
    { xDate: new Date('2013-06-23'), Open: 85.8, High: 85.96, Low: 85.67, Close: 85.83 },
    { xDate: new Date('2013-06-25'), Open: 86.07, High: 86.22, Low: 85.75, Close: 85.87 },
    { xDate: new Date('2013-06-27'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },
    { xDate: new Date('2013-06-29'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },
    { xDate: new Date('2013-07-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },
    { xDate: new Date('2013-07-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },
    { xDate: new Date('2013-07-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },
    { xDate: new Date('2013-07-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },
    { xDate: new Date('2013-07-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },
    { xDate: new Date('2013-07-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },
    { xDate: new Date('2013-07-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },
    { xDate: new Date('2013-07-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },
    { xDate: new Date('2013-07-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },
    { xDate: new Date('2013-07-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },
    { xDate: new Date('2013-07-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },
    { xDate: new Date('2013-07-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },
    { xDate: new Date('2013-07-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },
    { xDate: new Date('2013-07-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },
    { xDate: new Date('2013-07-29'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },
    { xDate: new Date('2013-08-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },
    { xDate: new Date('2013-08-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },
    { xDate: new Date('2013-08-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },
    { xDate: new Date('2013-08-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },
    { xDate: new Date('2013-08-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },
    { xDate: new Date('2013-08-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },
    { xDate: new Date('2013-08-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },
    { xDate: new Date('2013-08-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },
    { xDate: new Date('2013-08-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },
    { xDate: new Date('2013-08-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },
    { xDate: new Date('2013-08-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },
    { xDate: new Date('2013-08-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },
    { xDate: new Date('2013-08-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },
    { xDate: new Date('2013-08-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },
    { xDate: new Date('2013-08-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },
    { xDate: new Date('2013-09-01'), Open: 86.1, High: 86.15, Low: 85.9, Close: 86.03 },
    { xDate: new Date('2013-09-03'), Open: 85.93, High: 86.17, Low: 85.84, Close: 86.02 },
    { xDate: new Date('2013-09-05'), Open: 85.74, High: 86, Low: 85.66, Close: 86 },
    { xDate: new Date('2013-09-07'), Open: 85.71, High: 85.71, Low: 85.36, Close: 85.62 },
    { xDate: new Date('2013-09-09'), Open: 85.3, High: 85.92, Low: 85.16, Close: 85.8 },
    { xDate: new Date('2013-09-11'), Open: 84.23, High: 85.46, Low: 84.23, Close: 85.2 },
    { xDate: new Date('2013-09-13'), Open: 84.51, High: 84.54, Low: 84.19, Close: 84.3 },
    { xDate: new Date('2013-09-15'), Open: 84.44, High: 84.65, Low: 84.2, Close: 84.63 },
    { xDate: new Date('2013-09-17'), Open: 84.6, High: 84.81, Low: 84.59, Close: 84.65 },
    { xDate: new Date('2013-09-19'), Open: 84.52, High: 84.86, Low: 84.4, Close: 84.76 },
    { xDate: new Date('2013-09-21'), Open: 84.17, High: 84.66, Low: 84.16, Close: 84.47 },
    { xDate: new Date('2013-09-23'), Open: 84.22, High: 84.3, Low: 83.98, Close: 84.26 },
    { xDate: new Date('2013-09-25'), Open: 83.75, High: 84.1, Low: 83.65, Close: 84 },
    { xDate: new Date('2013-09-27'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },
    { xDate: new Date('2013-09-29'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },
    { xDate: new Date('2013-10-01'), Open: 84.3, High: 84.45, Low: 84.19, Close: 84.22 },
    { xDate: new Date('2013-10-03'), Open: 83.79, High: 84.19, Low: 83.7, Close: 84.04 },
    { xDate: new Date('2013-10-05'), Open: 84.02, High: 84.02, Low: 83.69, Close: 83.71 },
    { xDate: new Date('2013-10-07'), Open: 84.01, High: 84.04, Low: 83.82, Close: 83.96 },
    { xDate: new Date('2013-10-09'), Open: 83.9, High: 84.02, Low: 83.86, Close: 83.94 },
    { xDate: new Date('2013-10-11'), Open: 84.09, High: 84.17, Low: 83.9, Close: 84.06 },
    { xDate: new Date('2013-10-13'), Open: 83.89, High: 84.25, Low: 83.77, Close: 84.01 },
    { xDate: new Date('2013-10-15'), Open: 84.05, High: 84.14, Low: 83.84, Close: 83.91 },
    { xDate: new Date('2013-10-17'), Open: 84.49, High: 84.65, Low: 84.18, Close: 84.22 },
    { xDate: new Date('2013-10-19'), Open: 84.99, High: 85.1, Low: 84.37, Close: 84.43 },
    { xDate: new Date('2013-10-21'), Open: 84.96, High: 85.06, Low: 84.7, Close: 85.01 },
    { xDate: new Date('2013-10-23'), Open: 84.68, High: 84.9, Low: 84.65, Close: 84.76 },
    { xDate: new Date('2013-10-25'), Open: 84.35, High: 85.03, Low: 84.32, Close: 84.67 },
    { xDate: new Date('2013-10-27'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },
    { xDate: new Date('2013-10-29'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },
    { xDate: new Date('2013-11-01'), Open: 84.2, High: 84.29, Low: 84.04, Close: 84.15 },
    { xDate: new Date('2013-11-03'), Open: 84.21, High: 84.25, Low: 84.03, Close: 84.17 },
    { xDate: new Date('2013-11-05'), Open: 84.72, High: 84.87, Low: 84.44, Close: 84.49 },
    { xDate: new Date('2013-11-07'), Open: 84.85, High: 84.88, Low: 84.5, Close: 84.72 },
    { xDate: new Date('2013-11-09'), Open: 84.53, High: 84.74, Low: 84.25, Close: 84.69 },
    { xDate: new Date('2013-11-11'), Open: 84.4, High: 84.7, Low: 84.27, Close: 84.52 },
    { xDate: new Date('2013-11-13'), Open: 84.96, High: 85.07, Low: 84.5, Close: 84.57 },
    { xDate: new Date('2013-11-15'), Open: 85.28, High: 85.32, Low: 84.95, Close: 85.03 },
    { xDate: new Date('2013-11-17'), Open: 85.35, High: 85.39, Low: 85.1, Close: 85.32 },
    { xDate: new Date('2013-11-19'), Open: 85.65, High: 85.66, Low: 85.21, Close: 85.36 },
    { xDate: new Date('2013-11-21'), Open: 85.38, High: 85.85, Low: 85.25, Close: 85.67 },
    { xDate: new Date('2013-11-23'), Open: 85.8, High: 85.96, Low: 85.67, Close: 85.83 },
    { xDate: new Date('2013-11-25'), Open: 86.07, High: 86.22, Low: 85.75, Close: 85.87 },
    { xDate: new Date('2013-11-27'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },
    { xDate: new Date('2013-11-29'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },
    { xDate: new Date('2013-12-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },
    { xDate: new Date('2013-12-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },
    { xDate: new Date('2013-12-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },
    { xDate: new Date('2013-12-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },
    { xDate: new Date('2013-12-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },
    { xDate: new Date('2013-12-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },
    { xDate: new Date('2013-12-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },
    { xDate: new Date('2013-12-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },
    { xDate: new Date('2013-12-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },
    { xDate: new Date('2013-12-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },
    { xDate: new Date('2013-12-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },
    { xDate: new Date('2013-12-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },
    { xDate: new Date('2013-12-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },
    { xDate: new Date('2013-12-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },
    { xDate: new Date('2013-12-29'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 }
];
//# sourceMappingURL=data-service.js.map