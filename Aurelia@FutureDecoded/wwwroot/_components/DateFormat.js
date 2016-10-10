import moment from 'moment';

export class DateFormatValueConverter {
    toView(value, format) {
        format = format || 'DD/MM/YYYY HH:mm';
        return moment(value)
            .format(format);
    }
}